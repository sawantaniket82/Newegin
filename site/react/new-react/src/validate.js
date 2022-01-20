import react from "react";
import React from "react";

export default class Validate extends react.Component {
    constructor() {
        super()
        this.state = {
            emailid: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }
    valid() {
        if (!this.state.emailid.includes("@") && this.state.password.length < 5) {
            this.setState({
                emailError: "Email Invalid", passwordError: "passowrd Length should be greater than 5"
            })
        }
        else if (!this.state.emailid.includes("@")) {
            this.setState({
                emailError: "Email Invalid"
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: "passowrd Length should be greater than 5"
            })
        }
        else {
            return true;
        }
    }

    submit() {
        this.setState({
            emailError: "", passwordError: ""
        })
        if (this.valid()) {
            alert("Form has been submitted");
        }
    }

    render() {
        return (
            <div>
                <h1>Validate Forms</h1>
                Email ID : <input type="text" name="emailid" onChange={(event) => { this.setState({ emailid: event.target.value }) }} /><br /><br />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.emailError}</p>
                Password : <input type="password" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }} /><br /><br />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
                <input type="submit" name="submit" value="submit" onClick={() => this.submit()} />
            </div>
        )
    }
}