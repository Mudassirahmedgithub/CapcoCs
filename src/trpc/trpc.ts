import { TRPCError, initTRPC } from "@trpc/server";

type Context = {
  userId?: string | null; // optional
};

const t = initTRPC.context<Context>().create();
const middleware = t.middleware;

// TEMP AUTH (No Clerk)
const isAuth = middleware(async (opts) => {
  const { ctx } = opts;

  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    ctx: {
      ...ctx,
      userId: ctx.userId,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
