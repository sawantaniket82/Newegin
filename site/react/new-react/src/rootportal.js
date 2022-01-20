import React from 'react';
import reactDom from 'react-dom';

var h1 = {
    color: "#DBFF33",
    textAlign: "right",
    fontfamily: "",
    backgroundColor: "#0fc0fc"

}

export default class Rootportal extends React.Component {

    render() {
        return reactDom.createPortal(
            <h1 style={h1}>PORTAL </h1>,
            document.getElementById('root-portal')
        )

    }
}

