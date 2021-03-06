import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchField from './SearchField';
import { Grid } from '@material-ui/core';
import Employee from './Employee';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SearchPanel extends React.Component {
  state = {
    value: 'search-by-name',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
        // Tabbed Search Panel
      <div>
      <Paper className={classes.root}>
        
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Search By Name" value="search-by-name" />
          <Tab label="Search By Department" value="search-by-department" />
          <Tab label="Search By Location" value="search-by-location" />
          <Tab label="Search By Job Title" value="search-by-job-title" />
        </Tabs>

      </Paper>

      <SearchField field={this.state.value} />

      </div>
    );
  }
}

SearchPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPanel);