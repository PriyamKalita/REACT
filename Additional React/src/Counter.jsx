import { useState, useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0); // Correcting the useState initialization
    let [county, setCounty] = useState(0); // Correcting the useState initialization

    let incCountx = () => {
        setCountx((currCount) => currCount + 1);
    }

    let incCounty = () => {
        setCounty((currCount) => currCount + 1);
    }

    useEffect(function printSomething() {
        console.log("This i a side Effect");
    }, [countx]);
    
    return (
        <div>
            <h3>Countx = {countx}</h3>
            <button onClick={incCountx}>+1</button> 

            <h3>County = {county}</h3>
            <button onClick={incCounty}>+1</button> 
        </div>
    );
}
