import React from 'react'

export default class Ref extends React.Component {
    constructor() {
        super()
        this.Ref = React.createRef();
    }

    edit() {
        // console.log(this.Ref);
        this.Ref.current.focus();
    }
    render() {
        return (
            <div>
                <h1>Calculate</h1>
                <input ref={this.Ref} type="text" name="user" />
                <button onClick={() => this.edit()}>Click me</button>

            </div>
        )
    }
}
