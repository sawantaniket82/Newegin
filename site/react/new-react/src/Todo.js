import React, { useState } from "react";


const Todo = () => {


    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    return (
        <>
            <input type="text" value={input} onChange={(event) => { setInput(event.target.value) }} /><br></br>
            <button type="button" onClick={(event) => { setList.push(list); }}>Add</button>
            <li>{list}</li>
        </>
    );
}

export default Todo;