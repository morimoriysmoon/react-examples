import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textfield: {
    },
    textFieldInput: {
        fontSize: '5rem',
        color: 'black',
        fontWeight: 'bold'
    }
})

class Display extends Component {
    render() {
        const { classes, displayText, history } = this.props;

        let historyText = '';
        history.forEach(element => { historyText += element + ' ' });

        return (
            <Fragment>
                <TextField className={classes.textfield}
                    variant="outlined"
                    value={displayText}
                    margin="normal"
                    InputProps={{
                        classes: {
                            input: classes.textFieldInput
                        }
                    }}
                    fullWidth={true} label="Result">
                </TextField>
                <TextField className={classes.textfield}
                    variant="outlined"
                    value={historyText}
                    margin="normal"
                    fullWidth={true} label="History">
                </TextField>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Display);