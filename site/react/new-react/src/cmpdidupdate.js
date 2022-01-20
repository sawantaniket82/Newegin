import React from "react";
export default class Cmpdidupdate extends React.Component {
    constructor() {
        super()
        //console.warn("constructor");
        this.state = {
            active: null,
            who: null

        }
    }
    componentDidUpdate() {
        console.warn("updated");
        if (this.state.who == null) {
            this.setState({
                active: "yes",
                who: "Aniket"
            }

            )
        }
    }


    render() {
        return (
            <div>
                <h1>Component did updates {this.state.who}</h1>
                <button onClick={() => { this.setState({ active: "no" }) }}>Click ME </button>
            </div >
        )
    }

}
