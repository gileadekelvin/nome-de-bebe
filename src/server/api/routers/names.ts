import { z } from "zod";
import { Gender } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const namesRouter = createTRPCRouter({
  getNames: publicProcedure
    .input(
      z.object({
        firstLetter: z.string().nullish(),
        gender: z.nativeEnum(Gender).nullish(),
        query: z.string().nullish(),
        page: z.number(),
        size: z.number().default(10),
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
          ...(input.query && input.query.length > 0
            ? {
                names: {
                  contains: input.query,
                },
              }
            : {}),
        },
        orderBy: {
          frequency_total: "desc",
        },
        skip: input.page * input.size,
        take: input.size,
      });
    }),
  getTotal: publicProcedure
    .input(
      z.object({
        firstLetter: z.string().nullish(),
        gender: z.nativeEnum(Gender).nullish(),
        query: z.string().nullish(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.names.count({
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
          ...(input.query && input.query.length > 0
            ? {
                names: {
                  contains: input.query,
                },
              }
            : {}),
        },
      });
    }),
});
