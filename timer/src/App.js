import React, { Component } from 'react';
import Container from '@material-ui/core/Container'

import Timer from './components/Timer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleOnTimeout = this.handleOnTimeout.bind(this);
    }

    handleOnTimeout() {
        alert("TIME-OUT!!!");
    }

    render() {
        return (
            <Container maxWidth="sm">
                <br /><br />
                <Timer onTimeout={this.handleOnTimeout}/>
            </Container >
        );
    }
}

export default App;