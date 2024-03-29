/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import path from "path";
import csvtojson from "csvtojson";
import { prisma } from "../../src/server/db";

const importRow = async (row: any, index: number, total: number) => {
  console.log(`opa ${index + 1}/${total}`);
  const insertedRow = await prisma.names.create({
    data: row,
  });
  return insertedRow;
};

async function main() {
  const csvFilePath = path.join(__dirname, ".", "data", "grupos.csv");
  const names = await csvtojson().fromFile(csvFilePath);

  const parsedData = names.map((row) => {
    const parsedRow = {
      ...row,
      frequency_female: Number(row.frequency_female),
      frequency_male: Number(row.frequency_male),
      frequency_total: Number(row.frequency_total),
      ratio: Number(row.ratio),
    };
    return parsedRow;
  });

  await Promise.all(
    parsedData.map(async (row, index) => {
      const insertedRow = await importRow(row, index, parsedData.length);
      return insertedRow;
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
