import { db } from "@/db";
import { router, privateProcedure, publicProcedure } from "./trpc";

export const appRouter = router({
  testroute: publicProcedure.query(() => "Say this is test route!"),

  // Fetch user profile (requires ctx.userId from your auth middleware)
  getUser: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    const profiles = await db.user.findMany({
      where: { id: userId },
      select: {
        id: true,
        fullname: true,
      },
    });

    return profiles;
  }),

  // Count all users in DB
  countUser: publicProcedure.query(async () => {
    const totalUsers = await db.user.count();
    return totalUsers;
  }),
});

export type AppRouter = typeof appRouter;
