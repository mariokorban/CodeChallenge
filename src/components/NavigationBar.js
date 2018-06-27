import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import SearchPanel from './SearchPanel';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavigationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Employee Directory
          </Typography>

          <Button color="inherit">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <SearchIcon />
          </IconButton>
          Search Employees</Button>

          <Button color="inherit">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <AddIcon />
          </IconButton>
          Add Employee</Button>
        </Toolbar>
      </AppBar>
      <SearchPanel />
    </div>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);