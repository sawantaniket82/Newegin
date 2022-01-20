import React from "react";

export default class Home extends React.Component {
    constructor() {
        super()
        this.name = "Hello everyone";
    }
    render() {
        return (
            <div>
                <h1>
                    {this.name} it's NEWEGIN!!!
                </h1>

            </div>
        )
    }
}