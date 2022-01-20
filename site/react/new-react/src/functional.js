import React from "react";

function Functional(p) {
    const red = () => {
        //<a href="https://www.rockstargames.com/">GTA V</a>
        var a, b = "10", c = "99";
        a = parseInt(b) + parseInt(c);
        alert("Addition of two number is " + a)

        //alert("Hello everyone");
    }

    return <div>
        <h1 onClick={red}>Click ME {p.text}

        </h1>
    </div >
}

export default Functional;