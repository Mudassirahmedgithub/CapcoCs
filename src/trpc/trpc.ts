import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;

// TEMP AUTH MIDDLEWARE (no Clerk)
const isAuth = middleware(async (opts) => {
  // ctx must contain userId from your custom auth (middleware.ts)
  const userId = opts.ctx?.userId;

  if (!userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      ...opts.ctx,
      userId,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
