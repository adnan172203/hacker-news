import Comment from '../components/Comment';

const CommentList = ({ comments, nestedComments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          nestedComments={nestedComments}
        />
      ))}
    </>
  );
};

export default CommentList;
