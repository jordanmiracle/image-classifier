import React, {Component} from "react";
import './App.css';
import {Button, Card} from "react-bootstrap";

class App extends Component {
    state = {
        text: 'Hello world from the state'
    }

    render() {
        return (<div className="App">
            <h1>{this.state.text}</h1>
            {this.state.text ?
                <Button variant='primary' size='lg'>Test button</Button>
                :
                <Button variant='danger' size='lg'>Test button 2</Button>
            }
            {this.state.text &&
            <Card>Hi, there.</Card>
            }
        </div>);
    }

}

export default App;

