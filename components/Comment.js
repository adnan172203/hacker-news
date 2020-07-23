import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

const Comment = ({ comment }) => {
  const [nestedComment, setComment] = useState([]);
  const getData = async () => {
    
  const promiseData = comment.kids !== undefined ? comment.kids.map(async(item) => {

      const a = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json`
      );
      return await a.json();
    }):'';

   const newData = await Promise.all(promiseData);

   setComment(newData);
  };


  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className='comment'>
      <div className='comment-user'>{comment.by}</div>
      <div
        className='comment-content'
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />



      <style jsx>{`
        .comment {
          margin-bottom: 1.5em;
        }
        .comment-user {
          font-size: 0.9rem;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .comment-content {
          font-size: 0.9rem;
        }
        .comment-content :global(p) {
          margin: 0;
          margin-bottom: 0.5em;
          word-wrap: break-word;
        }
        .comment-content :global(a) {
          color: #f60;
          text-decoration: underline;
        }
        .comment-content :global(pre) {
          max-width: 100%;
          overflow: scroll;
        }
        .nested-comments {
          margin-top: 1em;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          padding-left: 1em;
        }
      `}</style>
    </div>
  );
};


export default Comment;
