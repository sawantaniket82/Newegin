import React from "react";

export default class Hidenshow extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Anand",
            show: true
        }
    }


    render() {
        return (
            <div>{
                this.state.show ? <h2>Hello {this.state.name}  </h2> : null}
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Hide N Show</button>

            </div >
        )
    }
}