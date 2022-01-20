import React from 'react';

export default class Mapfunction extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                { name: "ANiket", email: "aniket@gmail.com", phone: "12354" },
                { name: "Sarvesh", email: "sarvesh@gmail.com", phone: "111111" },
                { name: "Ajay", email: "ajay@gmail.com", phone: "789654" },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>LisTing usng map function</h1>{
                    this.state.list.map((item) =>
                        <li><div>NAme : {item.name} Phone: {item.phone}</div></li>


                    )
                }


            </div>
        )
    }
}
