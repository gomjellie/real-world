import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FormEvent } from 'react'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Header } from '~/components/Header'
import { deleteCookie, setCookie } from '~/utils/cookieUtils'
import { trpc } from '~/utils/trpc'

const LoginPage: NextPage = () => {
  const { data: session, refetch } = trpc.auth.getSession.useQuery()
  const loginMutation = trpc.auth.loginUser.useMutation()
  const { register, watch } = useForm()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const response = await loginMutation.mutateAsync({
        email: watch('email'),
        password: watch('password'),
      })
      if ('errors' in response) {
        deleteCookie('token')
        return
      }
      setCookie('token', response.user.token)
      refetch()
    },
    [loginMutation, watch, refetch],
  )

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  const errors = (() => {
    if (loginMutation.data && 'errors' in loginMutation.data) {
      return loginMutation.data.errors
    }
    return {}
  })()

  return (
    <>
      <Head>
        <title>Login - Real World</title>
        <meta name="description" content="Login to Real World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active="login" />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link href="/register">
                  <a>Need an account?</a>
                </Link>
              </p>
              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input
                    {...register('email')}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    disabled={loginMutation.isLoading}
                  />
                </fieldset>
                {errors.email && (
                  <ul className="error-messages">
                    <li>email {errors.email}</li>
                  </ul>
                )}
                <fieldset className="form-group">
                  <input
                    {...register('password')}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    disabled={loginMutation.isLoading}
                  />
                </fieldset>
                {errors.password && (
                  <ul className="error-messages">
                    <li>password {errors.password}</li>
                  </ul>
                )}
                {errors['email or password'] && (
                  <ul className="error-messages">
                    <li>email or password {errors['email or password']}</li>
                  </ul>
                )}
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={loginMutation.isLoading}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
