import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Top</a>
            </Link>
          </li>
          <li>
            <Link href='/best'>
              <a>Best</a>
            </Link>
          </li>
          <li>
            <Link href='/newest'>
              <a>New</a>
            </Link>
          </li>
          <li>
            <Link href='/show'>
              <a>ShowHN</a>
            </Link>
          </li>
          <li>
            <Link href='/ask'>
              <a>AskHN</a>
            </Link>
          </li>
          <li>
            <Link href='/jobs'>
              <a>Jobs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
