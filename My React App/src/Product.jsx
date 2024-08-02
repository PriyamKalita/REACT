import "./Product.css";

// function Product() {
//     return (
//         <div className="Product">
//             <h3>Product Titile</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }

// REACT Props
// function Product({title, price, features}) {
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             <p>{features}</p>

//         </div>
//     );
// }

// function Product({title, price, features}) {
//     const list = features.map((feature) => <li>{feature}</li>)
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             <p>{list}</p>

//         </div>
//     );
// }

// function Product({ title, price, features }) {
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             <p>
//                 {features.map((feature) => { 
//                     <li>{feature}</li> 
//                 })};
//             </p>

//         </div>
//     );
// }


// Conditional
// function Product({ title, price, features }) {
//     if(price > 30000){
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             <p>Discount Of 5%</p>
//         </div>
//     );
// }else{
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//         </div>
//     );
// }
// }


// export default Product;

// function Product({ title, price, features }) {
//     // let isDiscount = price > 30000 ? "Discount of 5%" : "";
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             {/* <p>{isDiscount}</p> */}
//             {/* {price > 30000 ? <p>"Discount of 5%"</p> : null} */}
//             {price > 30000 && <p>"Discount of 5%"</p>}

//         </div>
//     );
// }


// export default Product;

// Dynamic Component Styling
// function Product({ title, price, features }) {
//     let isDisocunt = price > 30000
//     let styles = { backgroundColor:  isDisocunt ? "lightgreen": ""};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             {price > 30000 && <p>Discount of 5%</p>}

//         </div>
//     );
// }

// import Price from "./Price";

// function Product({ title, idx }) {
//     let oldPrice = ["12000", "12200", "3000", "340"];
//     let newPrice = ["9000", "11000", "1000", "120"];
//     let description = [
//         ["8000 DPI", "5 Programmable button"], 
//         ["Intutive Surface", "Designed for iPad Pro"],
//         [ "Designed for IPad Pro", "Intutive Surface"],
//         [ "Wireless", "Optical Orientation"],
//     ];

//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <p>{Description[idx][0]}</p>
//             <p>{Description[idx][1]}</p>
//             <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
//         </div>
//     );
// }

// export default Product;

import React from 'react';
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrice = ["12000", "12200", "3000", "340"];
    let newPrice = ["9000", "11000", "1000", "120"];
    let description = [
        ["8000 DPI", "5 Programmable button"], 
        ["Intuitive Surface", "Designed for iPad Pro"],
        ["Designed for iPad Pro", "Intuitive Surface"],
        ["Wireless", "Optical Orientation"],
    ];

    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;
