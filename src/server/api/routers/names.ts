import { z } from "zod";
import { Gender } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const namesRouter = createTRPCRouter({
  getNames: publicProcedure
    .input(
      z.object({
        firstLetter: z.string().nullish(),
        gender: z.nativeEnum(Gender).nullish(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.names.findMany({
        where: {
          ...(input.firstLetter
            ? {
                name: {
                  startsWith: input.firstLetter,
                },
              }
            : {}),
          ...(input.gender
            ? {
                classification: input.gender,
              }
            : {}),
        },
        orderBy: {
          frequency_total: "desc",
        },
        take: 10,
      });
    }),
});
