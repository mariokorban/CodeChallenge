import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 5,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  formLabel: {
      marginRight: theme.spacing.unit * 25,
  },
});

class SearchPanel extends React.Component {
  state = {
    value: 'search-by-name',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      
        <FormControl component="fieldset" required className={classes.formControl}>
        
          <FormLabel component="legend">Search Employees: </FormLabel>
        
          <RadioGroup
            aria-label="search"
            name="search"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            row={true}>
            
            
            <FormControlLabel className={classes.formLabel} value="search-by-name" control={<Radio color="primary" />} label="Search By Name" />
            <FormControlLabel className={classes.formLabel} value="search-by-department" control={<Radio color="primary" />} label="Search By Department" />
            <FormControlLabel className={classes.formLabel} value="search-by-location" control={<Radio color="primary" />} label="Search By Location" />
            <FormControlLabel className={classes.formLabel} value="search-by-job-title" control={<Radio color="primary" />} label="Search By Job Title" />
            
          </RadioGroup>
          
        </FormControl>
        
      </div>
    );
  }
}

SearchPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPanel);