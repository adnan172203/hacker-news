import React, {useState,useEffect} from 'react';
import fetch from 'isomorphic-fetch';

const Index = ({allpost}) => {

    const [post,setPost] = useState([]);
    
    useEffect(()=>{
        setPost(allpost);
    },[]);

    return (
        <div>
            <h1>Hello hacker news</h1>
            { post.map(p => <p key={p.id}>{p.title}</p>) }
        </div>
    )
}



export async function getStaticProps() {
    const res = await fetch('https://hacker-news.firebaseio.com//v0/newstories.json?print=pretty');
    const data = await res.json();
    const statuscode = res.status > 200 ? res.status : false;


    const promises = data.slice(0, 20).map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
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