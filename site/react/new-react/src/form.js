import React from "react";

export default class Form extends React.Component {


    render() {
        return (
            <div>
                <form>
                    username : <input type="text" name="username" />
                    password:<input type="password" name="password" />
                    <input type="submit" name="submit" />

                </form>

            </div>
        )
    }
}