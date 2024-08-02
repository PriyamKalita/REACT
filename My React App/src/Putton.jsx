import React from 'react';

// function printHello() {
//     console.log("Hello");
// }

function printHello(event) {
    console.log("Hello");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye");
}

function handleDblClick() {
    console.log("You are Double Click");
}



export default function Button() {
    return (
        <div>

            <button onClick={printHello}>Click me</button>

            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas molestias labore sint dignissimos maiores voluptatibus consectetur quam atque reprehenderit soluta eos dolorum assumenda dolores optio, voluptate illum eius recusandae?
            </p>

            <button onDoubleClick={handleDblClick}>Double Click me</button>
        </div>
    );
}
