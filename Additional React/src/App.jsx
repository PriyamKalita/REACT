import { useState } from "react";
import './App.css';
import CommentsForm from './CommentsForm';
import Comment from './Comment';
import Counter from "./Counter";
import Joker from "./Joker";

function App() {
    const [comments, setComments] = useState([{
        username: "priyamkalita2002@gmail.com",
        remarks: "Nice",
        rating: 4
    }]);

    const addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("Add new Comment");
    };

    return (
        <>
            {/* <Comment comments={comments} />
            <CommentsForm addNewComment={addNewComment} /> */}
            {/* <Counter /> */}

            <Joker />
        </>
    );
}

export default App;
