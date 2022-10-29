import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { trpc } from '~/utils/trpc'

export const Header: FC = () => {
  const { pathname } = useRouter()
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
                  active: pathname === '/',
                })}
                href=""
              >
                Home
              </a>
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <Link href="/editor">
                <a className="nav-link" href="">
                  <i className="ion-compose"></i>&nbsp;New Article
                </a>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <Link href="/settings">
                <a className="nav-link" href="">
                  <i className="ion-gear-a"></i>&nbsp;Settings
                </a>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <Link href={`/profile/@${session.username}`}>
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
                    active: pathname === '/login',
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
                    active: pathname === '/register',
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
