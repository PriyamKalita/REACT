// import Product from "./Product.jsx";

// function ProductTab() {
//     return (
//     <>
//       <Product />
//       <Product />
//       <Product />
//     </>
//     );
// }

// REACT Props
// function ProductTab() {
//   return (
//   <>
//     <Product title="PHONE" price={30000}/>
//     <Product title="LAPTOP" price={40000}/>
//     <Product title="PEN" price={10}/>
//   </>
//   );
// }

// function ProductTab() {

//   // let option = ["HiTech", "Durable", "Fast"];

//   // let option = [<li>"Hitech"</li>, <li>"Durable"</li>, <li>"Fast"</li>]

//   let option = ["HiTech", "Durable", "Fast"];

//   return (
//   <>
//     <Product title="PHONE" price={30000} features={option}/>
//     <Product title="LAPTOP" price={40000}/>
//     <Product title="PEN" price={10}/>
//   </>
//   );
// }


// export default ProductTab;

// function ProductTab() {

//   // let option = ["HiTech", "Durable", "Fast"];

//   // let option = [<li>"Hitech"</li>, <li>"Durable"</li>, <li>"Fast"</li>]

//   let option = ["HiTech", "Durable", "Fast"];

//   return (
//   <>
//     <Product title="PHONE" price={30000} />
//     <Product title="LAPTOP" price={40000}/>
//     <Product title="PEN" price={10}/>
//   </>
//   );
// }


// export default ProductTab;

// function ProductTab() {
//   let style = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent:"center",
//     alignItems: "center",
//   };

//   return (
//   <div style={style}>
//     <Product title="Logitech MX Matser" idx={0}/>
//     <Product title="Apple Pencil" idx={1}/>
//     <Product title="Zebronics Zeb-transformer" idx={2}/>
//     <Product title="Petronics Toad 23" idx={3}/>
//   </div>
//   );
// }

// export default ProductTab;

import React from 'react';
import Product from './Product';

function ProductTab() {
    let style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={style}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1} />
            <Product title="Zebronics Zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
        </div>
    );
}

export default ProductTab;
