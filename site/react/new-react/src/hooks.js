import React, { useState } from "react";
import './App.css';

export default function Hooks() {
    const [count, setCount] = useState(100);
    return (
        <div>
            <h1>Functional Hooks {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>increment</button>
        </div>
    )
}

