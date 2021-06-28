import "./Comments.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Comments(props) {
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const history = useHistory();

  const { content } = commentData;
  const { handleCreate, comments } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="comment-container">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
      <div className="comments-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(commentData);
          }}
        >
          <input
            type="text"
            name="content"
            value={content}
            placeholder="Write your comment in here!"
            onChange={handleChange}
          />
          <br />
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
