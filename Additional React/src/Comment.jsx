import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";


export default function Comment({ comments }) {
    let [comment, setComments] = useState([{
        username: "",
        remarks: " ",
        rating: 4,
    },
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }
    return (
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div key={idx} className="comment">
                    <span>{comment.remarks}</span><br />
                    &nbsp;
                    <span>Rating = {comment.rating}</span>
                    &nbsp;
                    <p>- {comment.username}</p>
                </div>
            ))}
        </div>
    );
}

