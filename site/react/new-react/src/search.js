import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';


export default function Submit() {

    let username = document.getElementsByName('username');
    let password = document.getElementsByName('password');

    if (username === "Aniket" && password === "Aniket") {
        alert("Welcome Aniket");
    }
    else {
        alert("invalid")
    }


    return <div>
        <h1 onClick={() => this.Submit()}>login page</h1>
    </div>

}

ReactDOM.render(
    <React.StrictMode>
        <Submit />
    </React.StrictMode>,
    document.getElementById('root')
);
