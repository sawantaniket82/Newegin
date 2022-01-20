import React from "react";

export default class Cmpdidmount extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Aniket", data: null
        }
        console.warn("constructor".name);
    }
    componentDidMount() {
        this.setState({
            data: "anand"
        })
        console.warn("componentDidMount")
    }
    render() {
        console.warn("updated")
        return (
            <div>
                <h1>component did mount</h1>
            </div>
        )
    }

}