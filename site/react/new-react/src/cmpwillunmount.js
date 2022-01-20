import React from "react";

export default class Cmpwillunmount extends React.Component {
    componentWillUnmount() {
        alert("user has been deleted");
    }
    render() {
        return (
            <div>
                <li>name : Aniket sawant</li>
                <li>email : aniket@gmail.com</li>
                <li>mob : 0123456789 </li>

            </div >
        )
    }
}
