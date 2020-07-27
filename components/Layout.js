import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <header className='container'>
        <nav>
          <h1>
            <Link href='/'>
              <a title='Hacker News is a social news website focusing on computer science and entrepreneurship.'>
                <span className='main-title'>Hacker News</span>{' '}
              </a>
            </Link>
          </h1>
        </nav>
      </header>
      <div className='container'>{children}</div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #fc6621;
        }
        nav > * {
          display: inline-block;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
        nav .back-button {
          font-size: 0.9rem;
          padding-right: 1em;
          cursor: pointer;
        }

        h1 .main-title {
          color: #fff;
          font-size: 2rem;
          padding: 1rem;
      }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }

        button.button {
          background: none;
          outline: 0;
          border: none;
          margin-left: 10px;
          color: #828282;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Layout;
