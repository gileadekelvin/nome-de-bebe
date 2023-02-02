/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import path from "path";
import csvtojson from "csvtojson";
import { prisma } from "../../src/server/db";

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
  await prisma.names.createMany({ data: parsedData, skipDuplicates: true });
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
