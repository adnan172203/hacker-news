import Link from 'next/link';
import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='container'>
        <header>
          <h1>
            <Link href='/'>
              <a title='Hacker News is a social news website focusing on computer science and entrepreneurship.'>
                <span className='main-title'>Hacker News</span>{' '}
              </a>
            </Link>
          </h1>
        </header>
        <Nav />

        {children}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        header > * {
          display: inline-block;
        }

        header {
          background: #fc6621;
        }
        header a {
          text-decoration: none;
        }

        h1 .main-title {
          color: #fff;
          font-size: 2rem;
          padding: 1rem;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #333;
          font-family: Verdana, Geneva, sans-serif;
        }

        button.button {
          background:none;
          outline: 0;
          border: none;
          margin-left: 10px;
          color: #828282;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }

        footer {
          background: #eee;
          display:block;
          padding:1rem;
          border-radius: 0 0 5px 5px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
