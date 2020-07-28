import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/top'>
              <a>Top</a>
            </Link>
          </li>
          <li>
            <Link href='/past'>
              <a>Past</a>
            </Link>
          </li>
          <li>
            <Link href='/ask'>
              <a>ask</a>
            </Link>
          </li>
          <li>
            <Link href='/show'>
              <a>Show</a>
            </Link>
          </li>
          <li>
            <Link href='/jobs'>
              <a>Jobs</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            font-size: 14px;
            background-color: #333;
            padding: 0 10px;
            font-weight: 600;
          }
          nav ul {
            margin-left: -41px;
          }
          li {
            display: inline-block;
          }
          a {
            display: block;
            color: #fff;
            padding: 10px;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: #fff;
            background-color: #111;
            border-radius:5px;
          }

          @media only screen and (max-width: 400px) {
            nav {
              font-size: 13px;
            }
          }
          @media only screen and (max-width: 320px) {
            nav {
              font-size: 12px;
            }
            a {
              padding: 7px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Nav;
