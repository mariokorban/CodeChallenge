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

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
};


class NavigationBar extends React.Component {  

 
  navigateSearch = () =>{
    window.history.pushState(null,'/api');
  }

  render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Employee Directory
          </Typography>

          <Button color="inherit" onClick={this.navigateSearch}>
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
    </div>
  );
}
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);