// src/server/router/context.ts
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { prisma } from '~/server/db/client'

type CreateContextOptions = {
  readonly token: string | null
}

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    token: opts.token,
    prisma,
  }
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts

  const token = (() => {
    if (req.cookies.token == null) {
      return null
    }
    return req.cookies.token
  })()
  return createContextInner({
    token,
  })
}

export type Context = inferAsyncReturnType<typeof createContext>
