import { createTRPCRouter } from "./trpc";
import { namesRouter } from "./routers/names";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  names: namesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
