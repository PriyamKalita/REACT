import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setLiked] = useState(false);
    let [clicks, setClicks] = useState(0); // Corrected initial state for clicks

    let toggleLike = () => {
        setLiked(!isLiked);
        setClicks(clicks + 1);
    }

    let likesStyle = { color: "red" };
    return (
        <div>
            <p>Clicks : {clicks} </p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likesStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
