import React from "react";


//props using function
// export default function Properties(prop) {
//     return (
//         <div>
//             <h1>
//                 Hello {prop.text.firstName + prop.lastName}
//             </h1>
//         </div>
//     )
// }


//----------------------------------------------------------------------------------------


//props using class

export default class Properties extends React.Component {
    render() {
        return (
            <div>
                <h3>Welcome {this.props.text.firstName + ' ' + this.props.lastName}</h3>
            </div>
        )
    }
}