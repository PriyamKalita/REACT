// export default function Price(oldPrice, newPrice) {
//     let oldStyle ={
//         textDecorationLine : "line-through",
//     }
//     let newStyle ={
//         fontWeight: "bold",
//     }
//     let style = {
//         backgroundColor : "pink",
//         height: "30px",
//         width:"200px",
//         borderBottomLeftRadious: "15px",
//         borderBottomRightRadious: "15px",

//     }
//     return  (
//         <div>
//         <span style={oldStyle}>{oldPrice}</span>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <span style={newStyle}>{newPrice}</span>
//         </div>
//     );
// }
export default function Price({ oldPrice, newPrice }) {
    let oldStyle = {
        textDecorationLine: "line-through",
    };
    let newStyle = {
        fontWeight: "bold",
    };
    let style = {
        backgroundColor: "pink",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    };
    return (
        <div style={style}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}
