import classnames from 'classnames'
import Link from 'next/link'
import type { FC } from 'react'
import { trpc } from '~/utils/trpc'

export const Header: FC<{
  readonly active: 'home' | 'login' | 'register'
}> = ({ active }) => {
  const { data: session } = trpc.auth.getSession.useQuery()

  const isLoggedIn = session != null && 'username' in session

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="">
            conduit
          </a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/">
              <a
                className={classnames('nav-link', {
                  active: active === 'home',
                })}
                href=""
              >
                Home
              </a>
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <Link href={`/@${session.username}`}>
                <a className="nav-link" href="">
                  <picture>
                    <source srcSet={session.image} type="image/jpeg" />
                    <img
                      className="user-pic"
                      src={session.image}
                      alt="user-pic"
                    />
                    {session.username}
                  </picture>
                </a>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className="nav-item">
              <Link href="/login">
                <a
                  className={classnames('nav-link', {
                    active: active === 'login',
                  })}
                  href=""
                >
                  Sign in
                </a>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className="nav-item">
              <Link href="/register">
                <a
                  className={classnames('nav-link', {
                    active: active === 'register',
                  })}
                  href=""
                >
                  Sign up
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
