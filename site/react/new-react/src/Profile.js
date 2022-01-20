import React from 'react';
var a
class Profile extends React.Component {
    
    constructor() {
        super()
        this.name = "Aniket";


    }
    componentDidMount() {
        console.warn("called life cycle");
        this.name2 = "Sawant";

        return this.name2;
    }
    render() {

        a = this.componentDidMount();

        return (



            < div > Profile Component {"My name is " + (this.name) + ' ' + a}

            </div >



        )
    }
}

export default Profile;