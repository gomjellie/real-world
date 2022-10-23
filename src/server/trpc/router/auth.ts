import { z } from 'zod'
import { conduitAxios } from '~/server/remote/axios'
import type { ErrorResponse, UserResponse } from '~/server/remote/models'
import { protectedProcedure, publicProcedure, router } from '~/server/trpc/trpc'

export const authRouter = router({
  loginUser: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ input }) => {
      const { data } = await conduitAxios.post<UserResponse | ErrorResponse>(
        '/users/login',
        {
          user: input,
        },
      )
      if ('errors' in data) {
        return data
      }
      return data
    }),
  registerUser: publicProcedure
    .input(
      z.object({
        username: z.string().min(3),
        password: z.string().min(8),
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      const { data } = await conduitAxios.post<UserResponse | ErrorResponse>(
        '/users',
        {
          user: input,
        },
        {
          validateStatus(status) {
            return status < 500
          },
        },
      )
      if ('errors' in data) {
        return data
      }

      return data
    }),
  getSession: publicProcedure.query(async ({ ctx }) => {
    if (ctx.token == null) {
      return null
    }
    const { data } = await conduitAxios.get<UserResponse | ErrorResponse>(
      '/user',
      {
        headers: {
          Authorization: `Token ${ctx.token}`,
        },
      },
    )
    if ('errors' in data) {
      return null
    }

    return data.user
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'You are logged in and can see this secret message!'
  }),
})
