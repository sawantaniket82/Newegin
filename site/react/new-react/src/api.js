import React from "react";

export default class Api extends React.Component {
    constructor() {
        super()
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users?delay=3').then((resp) => {
            resp.json().then((res) => {
                this.setState({ users: res.data })
            })
        })
    }
    render() {
        return (
            <div>FETCH API
                {this.state.users ? this.state.users.map((item, i) => <div>{i}---{item.first_name}---{item.last_name}</div>) : null}
            </div>



        )
    }
}