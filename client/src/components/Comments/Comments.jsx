import "./Comments.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

export default function Comments(props) {
  const { comments } = props;
  const [comment, setComment] = useState({
    content: "",
  });

  const { content } = comment;

  return (
    <div className="comment-container">
      <h3>Comments</h3>
      {comments.map((comment) => (
				<p key={comment.id}>{comment.content}</p>
			))}
      <div className="comments-form">
        <form>
          <input
            type="text"
            name="content"
            value={content}
            placeholder="Write your comment in here!"
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
