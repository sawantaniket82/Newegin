
import React from "react";

export default class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            username: null,
            password: null
        }
    }

    submit() {
        console.warn(this.state)
    }
    render() {
        return (
            <div>
                <h1>
                    Simple Submit Forms
                </h1>
                Username : <input type="text" name="username" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br /><br />
                Password : <input type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
        )
    }
}