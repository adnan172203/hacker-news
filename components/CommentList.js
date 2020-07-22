import Comment from '../components/Comment';

const CommentList = ({ comments }) => {
    console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
