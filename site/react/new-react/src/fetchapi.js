import React from "react";

export default class Fetchapi extends React.Component {
    constructor(){
        super()
        this.state={
            user :null
        }
    }
    componentDidMount() {
        fetch('https://api.instagram.com/v1/media/popular').then((resp) => {
            
            resp.json().then((res) => {
                console.log(res)
                this.setState({ user:res.data })
            })
        })
    }
    render(){
        return(
            <div>Hello
                {this.state.user ? this.state.user.map((item,i)=><div> {i}---{item.data.type}</div>):null}
            </div>
            
        )
    }



}







