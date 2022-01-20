import React from "react";

export default class Lifecycle extends React.Component {
    constructor() {
        super()

        console.log("Learning Life cycle")
    }
    componentDidMount() {

        console.log("one by one");
    }
    render() {
        const display = () => {
            console.log("hello everyone");
        }
        display();
        return (
            <div>
                <h1>life cycle
                </h1>
            </div>
        )
    }
}