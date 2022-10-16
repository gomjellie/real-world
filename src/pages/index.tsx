import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>대문 - Real World</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <a href="profile.html">
                    <picture>
                      <source
                        srcSet="http://i.imgur.com/Qr71crq.jpg"
                        type="image/jpeg"
                      />
                      <img src="http://i.imgur.com/Qr71crq.jpg" alt="profile" />
                    </picture>
                  </a>
                  <div className="info">
                    <a href="" className="author">
                      Eric Simons
                    </a>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 29
                  </button>
                </div>
                <a href="" className="preview-link">
                  <h1>How to build webapps that scale</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <a href="profile.html">
                    <picture>
                      <source
                        srcSet="http://i.imgur.com/N4VcUeJ.jpg"
                        type="image/jpeg"
                      />
                      <img src="http://i.imgur.com/N4VcUeJ.jpg" alt="profile" />
                    </picture>
                  </a>
                  <div className="info">
                    <a href="" className="author">
                      Albert Pai
                    </a>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 32
                  </button>
                </div>
                <a href="" className="preview-link">
                  <h1>
                    The song you won&apost ever stop singing. No matter how hard
                    you try.
                  </h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" className="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" className="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    react
                  </a>
                  <a href="" className="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" className="tag-pill tag-default">
                    node
                  </a>
                  <a href="" className="tag-pill tag-default">
                    rails
                  </a>
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
