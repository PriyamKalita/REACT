// import { useState } from "react";

// export default function Counter() {
//     const [count, setCount] = useState(0); // Correctly initialize state with useState
//     console.log("Component is Rendered");
//     console.log(`Count : ${count}`);

//     const incCount = () => {
//         setCount((currCount) => currCount + 1);
//         setCount((currCount) => currCount + 1);

//         // setCount(25);
        
//         console.log(`Inside incCount, count : ${count}`);
//     };

//     return (
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     );
// }


import { useState } from "react";

function init() {
    console.log("Init was called");
    return Math.random(); // Corrected spelling
}

export default function Counter() {
    const [count, setCount] = useState(init); // Correctly initialize state with useState
    console.log("Component was re-rendered");

    const incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });

        console.log(`Inside incCount, count : ${count}`);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
