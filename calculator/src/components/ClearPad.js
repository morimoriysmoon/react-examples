import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ClearPad extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        const { onClick } = this.props;
        onClick();
    }

    render() {
        return (
            <span>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth={true}
                    onClick={this.handleOnClick}
                >
                    <h1>CLR</h1>
                </Button>
            </span>
        );
    }
}

export default ClearPad;