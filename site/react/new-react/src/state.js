
import React from "react";

export default class State extends React.Component {

    constructor() {

        super();
        this.state = {
            name: "Aniket",
            email: "aniket@gmail.com",
            count: 0
        }



    }
    update() {
        this.setState({
            name: "Anand",
            email: "anand@gmail.com",
            count: this.state.count + 1

        })






    }


    render() {

        return (
            <div>
                <h1> Hello {this.state.name}</h1>
                <h1> Email {this.state.email}</h1>
                <h1> Email {this.state.count}</h1>
                <button onClick={() => { this.update() }}>Update</button>
            </div>
        )
    }
}