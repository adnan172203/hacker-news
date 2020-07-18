import Layout from '../components/Layout';

const News = ({ data }) => {
  console.log(data);
  return (
    <Layout title={data.title}>
      <main>
        <h1 className='news-title'>
          <a href={data.url}>{data.title}</a>
        </h1>
        <div className='news-details'>
          <strong>{data.score} points</strong>
          <strong>{data.descendants} comments</strong>
          <strong>{data.time}</strong>
        </div>
      </main>

      <style jsx>{`
          main {
            padding: 1em;
          }
          .news-title {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5em;
          }
          .news-title a {
            color: #333;
            text-decoration: none;
          }
          .news-title a:hover {
            text-decoration: underline;
          }
          .news-details {
            font-size: 0.8rem;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1em;
          }
          .news-details strong {
            margin-right: 1em;
          }
          .news-details a {
            color: #f60;
          }
        `}</style>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const newsId = query.id;

  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default News;
