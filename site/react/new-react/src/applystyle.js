import React from 'react';
import './applystyle.css'

export default function Applystyle(a) {
    const h2 = {
        color: "#DBFF33",
        textAlign: "right",
        fontfamily: "",
        backgroundColor: "#0fc0fc"
    }
    const h3 = {
        color: "#cf3476",
        textAlign: "left",
        fontfamily: "",
        backgroundColor: "#ff4500"
    }
    return (
        <div>
            <h1 className="header">React Global style</h1>
            <h2 style={h2}>React Inline style</h2>
            <h1 className={a.data === "plus" ? 'header' : h3}>React  Condition Style</h1>


        </div>
    )

}
