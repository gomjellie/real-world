import classnames from 'classnames'
import Link from 'next/link'
import type { FC } from 'react'

export const Header: FC<{
  readonly active: 'home' | 'login' | 'register'
}> = ({ active }) => {
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
            {/* Add "active" class when you're on that page" */}
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
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
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
        </ul>
      </div>
    </nav>
  )
}
