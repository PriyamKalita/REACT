import { useState } from "react";

export default function Joker() {
    const [joke, setJoke] = useState({ setup: "", punchline: "" });

    const URL = "https://api.chucknorris.io/jokes/random";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({ setup: jsonResponse.value, punchline: "" });
    };


    return (
        <div>
            <h1>Joker!</h1>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}
