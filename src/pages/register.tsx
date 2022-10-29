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

const RegisterPage: NextPage = () => {
  const { data: session, refetch } = trpc.auth.getSession.useQuery()
  const registerMutation = trpc.auth.registerUser.useMutation()
  const { register, watch } = useForm()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const response = await registerMutation.mutateAsync({
        email: watch('email'),
        password: watch('password'),
        username: watch('username'),
      })
      if ('errors' in response) {
        deleteCookie('token')
        return
      }
      setCookie('token', response.user.token)
      refetch()
    },
    [watch, registerMutation, refetch],
  )

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  const errors = (() => {
    if (registerMutation.data && 'errors' in registerMutation.data) {
      return registerMutation.data.errors
    }
    return {}
  })()

  return (
    <>
      <Head>
        <title>Register - Real World</title>
        <meta name="description" content="Register to Real World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Register</h1>
              <p className="text-xs-center">
                <Link href="/login">
                  <a>Have an account?</a>
                </Link>
              </p>

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input
                    {...register('username')}
                    className="form-control form-control-lg"
                    name="username"
                    type="text"
                    placeholder="Your Name"
                    disabled={registerMutation.isLoading}
                  />
                </fieldset>

                {errors.username && (
                  <ul className="error-messages">
                    <li>username {errors.username}</li>
                  </ul>
                )}
                <fieldset className="form-group">
                  <input
                    {...register('email')}
                    className="form-control form-control-lg"
                    name="email"
                    type="text"
                    placeholder="Email"
                    disabled={registerMutation.isLoading}
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
                    name="password"
                    type="password"
                    placeholder="Password"
                    disabled={registerMutation.isLoading}
                  />
                </fieldset>
                {errors.password && (
                  <ul className="error-messages">
                    <li>password {errors.password}</li>
                  </ul>
                )}
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={registerMutation.isLoading}
                  aria-disabled={registerMutation.isLoading}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
