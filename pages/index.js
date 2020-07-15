import React, {useState,useEffect} from 'react';
import fetch from 'isomorphic-fetch';
import NewsList from '../components/NewsList';
import Layout from '../components/Layout';

const Index = ({allpost}) => {

    const [post,setPost] = useState([]);
    
    useEffect(()=>{
        setPost(allpost);
    },[]);
    console.log(post);
    return (
        <Layout title="Hacker News" description="A hacker news clone made with next.js">
            <NewsList post ={post} />
        </Layout>
    )
}



export async function getStaticProps() {
    const res = await fetch('https://hacker-news.firebaseio.com//v0/newstories.json?print=pretty');
    const data = await res.json();
    const statuscode = res.status > 200 ? res.status : false;


    const promises = data.slice(0, 60).map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        response => response.json()
      )
    );
  const allpost = await Promise.all(promises);


    console.log(allpost);
    return {
        props: {
            allpost,
            statuscode,
        },
    };
}
export default Index