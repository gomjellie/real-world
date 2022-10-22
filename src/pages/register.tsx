import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Header } from '~/components/Header'
import { setCookie } from '~/utils/cookieUtils'
import { trpc } from '~/utils/trpc'

const RegisterPage: NextPage = () => {
  const { data: session } = trpc.auth.getSession.useQuery()
  const loginMutation = trpc.auth.registerUser.useMutation()
  const { register, watch } = useForm()

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      loginMutation
        .mutateAsync({
          email: watch('email'),
          password: watch('password'),
          username: watch('username'),
        })
        .then((response) => {
          if ('errors' in response) {
            return
          }
          setCookie('token', response.user.token)
        })
    },
    [watch, loginMutation],
  )

  if (session) {
    // TODO: redirect to home page
    window.location.href = '/'
    return <div>hi {session.username} you&apos;re already logged in</div>
  }

  const errors = (() => {
    if (loginMutation.data && 'errors' in loginMutation.data) {
      return loginMutation.data.errors
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
      <Header active="register" />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Register</h1>
              <p className="text-xs-center">
                <a href="">Have an account?</a>
              </p>

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input
                    {...register('username')}
                    className="form-control form-control-lg"
                    name="username"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>

                {errors.username && (
                  <ul className="error-messages">
                    <li>{errors.username}</li>
                  </ul>
                )}
                <fieldset className="form-group">
                  <input
                    {...register('email')}
                    className="form-control form-control-lg"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                {errors.email && (
                  <ul className="error-messages">
                    <li>{errors.email}</li>
                  </ul>
                )}
                <fieldset className="form-group">
                  <input
                    {...register('password')}
                    className="form-control form-control-lg"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                {errors.password && (
                  <ul className="error-messages">
                    <li>{errors.password}</li>
                  </ul>
                )}
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={loginMutation.isLoading}
                  aria-disabled={loginMutation.isLoading}
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
