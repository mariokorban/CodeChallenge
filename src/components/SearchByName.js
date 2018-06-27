import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: "primary",
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: "primary",
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: "primary",
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
});

function SearchByName(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          htmlFor="custom-css-input"
        >
          Custom CSS
        </InputLabel>
        <Input
          classes={{
            underline: classes.cssUnderline,
          }}
          id="custom-css-input"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        Search
      </Button>
      </FormControl>
    </div>
  );
}

SearchByName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchByName);