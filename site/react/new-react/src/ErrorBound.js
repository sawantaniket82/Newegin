import React, { Component } from 'react'

export default class ErrorBound extends Component {
    render() {
        if (true) {
            throw new Error("Custom Error")
        }
        return (
            <div>
                <h1>Error Component</h1>

            </div>
        )
    }
}
