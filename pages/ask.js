import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import NewsList from '../components/NewsList';
import Layout from '../components/Layout';
import Skeletons from '../components/Skeleton';

const Index = ({ newData, page }) => {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setPost(newData);
    setLoading(false);
  });

  return (
    <Layout
      title='Hacker News'
      description='A hacker news clone made with next.js'
    >
      {isLoading ? <Skeletons /> : <NewsList post={post} />}
      <footer>
      <Link href={`/?page=${page + 1}`}>
          <a>More</a>
        </Link>
      </footer>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  
  //fetch asktories id
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`
  );
  const data = await response.json();

  //fetch asktories through filtering

  let page = Number(query.page) || 1;
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
  return {
    props: {
      data,
      page,
      newData,
    },
  };
}
export default Index;
