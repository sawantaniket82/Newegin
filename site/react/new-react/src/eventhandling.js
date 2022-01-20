import React from "react";


//using class constructor

// export default class Event extends React.Component {
//     display() {
//         alert("Hello Student")
//     }
//     render() {
//         return (
//             <div>
//                 <h1>PVPPCOE</h1>
//                 <button onClick={this.display.bind()}>Click ME!</button>
//                 <button onClick={() => this.display()}>Bind ME!</button>
//             </div>
//         )
//     }
// }

//--------------------------------------------
//using simple function

export default function Display() {
    var testfun = () => {
        alert("Hello Computer ")
    }
    return (
        <div>
            <h1>PVPPCOE</h1>
            <button onClick={testfun}>Click ME</button>
        </div>
    )
}