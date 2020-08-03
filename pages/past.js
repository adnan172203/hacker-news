import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import NewsList from '../components/NewsList';
import Layout from '../components/Layout';
import Skeletons from '../components/Skeleton'; 

const Index = ({ data }) => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    const limit = 30;
    const start = (page - 1) * limit;
    const pageData = data.slice(start, start + limit);

    const promiseData = pageData.map(async (item) => {
      const a = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json`
      );
      return await a.json();
    });

    const newData = await Promise.all(promiseData);
    setLoading(false);
    setPost(newData);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [page]);

  return (
    <Layout
      title='Hacker News'
      description='A hacker news clone made with next.js'
    >
      {isLoading ? <Skeletons /> : <NewsList post={post} />}
      <footer>
        <button className='button' onClick={() => handleNext()}>
          <a>More</a>
        </button>
      </footer>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
export default Index;
