import Link from 'next/link';

const NewsList = ({ post }) => {
  return (
    <div className='news-list'>
      {post.map((p) => (
        <div className='news' key={p.id}>
          <h2 className='news-title'>
            <a href={p.url}>{p.title}</a>
          </h2>

          <div className='news-details'>
            <span>{p.score || 0} points</span>
            <Link href={`/news?id=${p.id}`}>
              <a>{p.descendants} comments</a>
            </Link>
          </div>
        </div>
      ))}

      <style jsx>{`
        .news-list {
          padding: 0 1em;
        }
        .news {
          padding: 1em 0;
        }
        .news-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }
        .news-title a {
          color: #333;
          text-decoration: none;
        }
        .news-title a:hover,
        .news-details a:hover {
          text-decoration: underline;
        }
        .news-details {
          font-size: 0.8rem;
          font-weight: bold;
        }
        .news-details span {
          margin-right: 1em;
        }
        .news-details a {
          color: #6600ff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default NewsList;
