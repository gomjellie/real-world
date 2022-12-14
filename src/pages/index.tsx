import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '~/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>대문 - Real World</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link href="#your-feed">
                      <a className="nav-link disabled">Your Feed</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#global-feed">
                      <a className="nav-link active">Global Feed</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <Link href="/user/@author">
                    <a>
                      <picture>
                        <source
                          srcSet="http://i.imgur.com/Qr71crq.jpg"
                          type="image/jpeg"
                        />
                        <img
                          src="http://i.imgur.com/Qr71crq.jpg"
                          alt="profile"
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="info">
                    <Link href="/user/@author">
                      <a className="author">Eric Simons</a>
                    </Link>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 29
                  </button>
                </div>
                <Link href="/article/slug">
                  <a className="preview-link">
                    <h1>How to build webapps that scale</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <Link href="/user/@author">
                    <a>
                      <picture>
                        <source
                          srcSet="http://i.imgur.com/N4VcUeJ.jpg"
                          type="image/jpeg"
                        />
                        <img
                          src="http://i.imgur.com/N4VcUeJ.jpg"
                          alt="profile"
                        />
                      </picture>
                    </a>
                  </Link>
                  <div className="info">
                    <Link href="/user/@author">
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
                      The song you won&apost ever stop singing. No matter how
                      hard you try.
                    </h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <button className="tag-pill tag-default">programming</button>
                  <button className="tag-pill tag-default">javascript</button>
                  <button className="tag-pill tag-default">emberjs</button>
                  <button className="tag-pill tag-default">angularjs</button>
                  <button className="tag-pill tag-default">react</button>
                  <button className="tag-pill tag-default">mean</button>
                  <button className="tag-pill tag-default">node</button>
                  <button className="tag-pill tag-default">rails</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
