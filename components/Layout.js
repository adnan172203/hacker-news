import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
      <div className='container'>
        <nav>
          <Link href='/'>
            <a>
              <span className='main-title'>Hacker News</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-block;
          color: black;
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
      }
      `}</style>
    </div>
  );
};

export default Layout;
