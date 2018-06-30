import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 5,
  },
  button: {
    margin: theme.spacing.unit,
  },
  font: {
      fontSize: 20,
      textAlign: 'center',
  }
});

class SearchField extends React.Component {
  state = {
  };


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <Grid container direction='row' alignItems='center' justify='center' spacing={8}>

        <Grid item xs={3} sm={4} md={4} lg={4} xl={4}></Grid>

        <Grid item xs={5} sm={3} md={3} lg={3} xl={3}>
        <TextField
          id="textfield"
          placeholder="Search"
          marginTop="normal"
          style={{ width: '100%' }}
          InputProps={{
              classes: {
                  input: classes.font,
              }
          }}
        />
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <Button variant="contained" size="medium" color="primary" className={classes.button} style={{ width: '100%' }}>
          Search
        </Button>
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={4} xl={4}></Grid>

        </Grid>
      </form>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);