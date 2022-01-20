import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Forms from './useeffect';

//import logo from './logo.svg';
// import Home from './Home';
// import Profile from './Profile';
// import Functional from './functional';
// import Properties from './props';
// import State from './state';
// import Hidenshow from './hidenshow';
// import Event from './eventhandling';
// import Display from "./eventhandling";
//import Lifecycle from './lifecycle'
// import Cmpdidmount from './cmpdidmount';
// import Cmpdidupdate from './cmpdidupdate';
//import Cmpwillunmount from './cmpwillunmount';
// import Hooks from './hooks';
// import Forms from './submitforms';
// import Validate from './validate';
// import Mapfunction from './mapfunction';
// import Applystyle from './applystyle'
// import Home from "./homes";
// import About from './about';
// import Form from './form';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Api from './api';
// import Fetchapi from './fetchapi';
// import Rootportal from './rootportal';
// import Ref from './ref';
// import { Button, Alert } from "react-bootstrap";
// import Bootstrap from './bootsrap';
// import ErrorBound from './ErrorBound';
// import ErrorBound2 from './ErrorBound2';

import Todo from "./Todo";

function App() {

  return (
    <div className="App">
      <header className="App-header">

        {/* ------------------------------------------------------------------------- */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* ------------------------------------------------------------------------------------- */}
        {/* {<a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React/New-React
    </a> } */}

        {/* -------------------------------------------------------------------------------------- */}
        {/* <Home /> */}

        {/* ------------------------------------------------------------------------------------ */}
        {/* <Profile /> */}

        {/* -------------------------------------------------------------------------------------- */}
        {/* <Functional text="hello " /> */}
        {/* --------------------------------------------------------------------------------------------- */}
        {/* {
          React.createElement('h1', { className: "conatiner" }, "IDBI INTECh")
        } */}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* <Properties text={{ firstName: 'Aniket' }} lastName='Sawant' />
        <Properties text={{ firstName: 'Sarvesh' }} lastName='Mahadik' />
        <Properties text={{ firstName: 'Omkar' }} lastName='Vanjare' /> */}

        {/* ------------------------------------------------------------------------------------- */}
        {/* <State  /> */}


        {/* ----------------------------------------------------------------------------------------- */}
        {/* <Hidenshow /> */}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* <Event /> */}
        {/* <Display /> */}

        {/* -------------------------------------------------------------------------------------------- */}
        {/* <Lifecycle /> */}

        {/* -------------------------------------------------------------------------------------------- */}
        {/* <Cmpdidmount /> */}

        {/* -------------------------------------------------------------------------------------------- */}
        {/* <Cmpdidupdate /> */}

        {/* -------------------------------------------------------------------------------------------- */}

        {/* export default class Cmpwillunmount1 extends React.Component {
    constructor() {
      super()
      this.state = {
        toggle: true
      }
    }
    render() {
      return (
        <div>
          <h1>
            {this.state.toggle ? <Cmpwillunmount /> : null}
          </h1>
          <button onClick={() => { this.setState({ toggle: false }) }}>Delete User</button>
        </div>
      )
    }
  } */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Hooks /> */}


        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Forms /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Validate /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Mapfunction /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Applystyle data={"minus"} /> */}


        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Router>

          <Link to="">Home</Link>
          <Link to="./about">About</Link>
          <Link to="./form">Form</Link>


          <Route exact path="/" component={Home} />
          <Route path="/src/about.js" component={About} />
          <Route path="/src/form.js" component={Form} />
        </Router> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Api /> */}
        {/* <Fetchapi /> */}


        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Rootportal /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Ref /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Button onClick={() => alert("YOU CLICKED THE BUTTON!!!")}>Click</Button> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <Bootstrap /> */}

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* <ErrorBound2> <ErrorBound /></ErrorBound2> */}

        {/* <ErrorBound><ErrorBound2 /></ErrorBound> */}

        <Todo />



      </header >
    </div >

  );
}

export default App;
