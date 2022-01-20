import React, { Component } from 'react'

export default class ErrorBound2 extends Component {
    constructor() {
        super()
        this.state = {
            error: null
        }

    }

    getDerived() {
        return {
            error: true
        }
    }
    render() {
        return (
            <div>{
                this.state.error ? <h1>Custom page for error handling</h1> : this.props.children
            }
            </div>
        )
    }
}
