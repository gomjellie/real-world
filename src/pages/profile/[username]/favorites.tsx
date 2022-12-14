import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '~/components/Header'

const ProfileFavorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>대문 - Real World</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <picture>
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="user-img"
                    alt="profile"
                  />
                </picture>

                <h4>Eric Simons</h4>
                <p>
                  Cofounder @GoThinkster, lived in Aol&apos;s HQ for a few
                  months, kinda looks like Peeta from the Hunger Games
                </p>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow Eric Simons
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link href="/profile/@author">
                      <a className="nav-link">My Articles</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/profile/@author/favorites">
                      <a className="nav-link active">Favorited Articles</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <Link href="/profile/@author">
                    <a>
                      <picture>
                        <img
                          src="http://i.imgur.com/Qr71crq.jpg"
                          alt="article image"
                        />
                      </picture>
                    </a>
                  </Link>

                  <div className="info">
                    <Link href="/profile/@author">
                      <a className="author">Eric Simons</a>
                    </Link>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 29
                  </button>
                </div>
                <Link href="/profile/@author">
                  <a className="preview-link">
                    <h1>How to build webapps that scale</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <Link href="/profile/@author">
                    <a>
                      <picture>
                        <img
                          src="http://i.imgur.com/N4VcUeJ.jpg"
                          alt="article image"
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="info">
                    <Link href="/profile/@author">
                      <a className="author">Albert Pai</a>
                    </Link>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 32
                  </button>
                </div>
                <Link href="/article/slug">
                  <a className="preview-link">
                    <h1>
                      The song you won&apos;t ever stop singing. No matter how
                      hard you try.
                    </h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">
                        Music
                      </li>
                      <li className="tag-default tag-pill tag-outline">Song</li>
                    </ul>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileFavorites
