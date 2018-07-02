import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';

//component styles
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
    search: 'search-by-name',
    searchLabel: 'Search By Name',
    searchValue: '',
    employees: [],
  };

  //handling the prop changes received from the SearchPanel
  componentWillReceiveProps(nextProps) {
    //comparision between old and new prop
    if(this.props.field != nextProps.field){
      //if the prop are different(prop changed)
      this.setState({search: nextProps.field});
      //changing states folowwing the new props
      if(nextProps.field == 'search-by-name'){
        this.setState({searchLabel: 'Search By Name'});
      }
      else if(nextProps.field == 'search-by-department'){
        this.setState({searchLabel: 'Search By Department'});
      }
      else if(nextProps.field == 'search-by-location'){
        this.setState({searchLabel: 'Search By Location'});
      }
      else if(nextProps.field == 'search-by-job-title'){
        this.setState({searchLabel: 'Search By Job Title'});
      }
    }
  };

  handleTextChange = (event,searchValue)=> {
      this.setState({ searchValue });
  };

  //Search method
  search(){

  };

  render() {
    const { classes } = this.props;

    return (
      <div>

        {/* Search form */}
      <form className={classes.container} noValidate autoComplete="off">
        
        <Grid container direction='row' alignItems='center' justify='center' spacing={8}>

        <Grid item xs={3} sm={4} md={4} lg={4} xl={4}></Grid>

        <Grid item xs={5} sm={3} md={3} lg={3} xl={3}>
        <TextField
          id="textfield"
          placeholder={this.state.searchLabel}
          value={this.state.searchValue}
          onChange={this.handleTextChange}
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
        <Button variant="contained" size="medium" color="primary" onClick={this.search} className={classes.button} style={{ width: '100%' }}>
          Search
        </Button>
        </Grid>

        <Grid item xs={3} sm={4} md={4} lg={4} xl={4}></Grid>

        </Grid>
      </form>

      {/* Employees grid result */}
      <Grid container direction='row' jsutify='center' alignItems='center' alignContent='center' spacing={32} style={{ marginTop: '10px' }}>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>

        {/* Mapping all the employees resulting from the api */}
        {this.state.employees.map(employee =>
          <Employee key={employee.id} fullname={employee.firtname+" "+employee.lastname} dob={employee.dob} mobile={employee.mobile_number} email={employee.email} gender={employee.gender} profile_pic={employee.profile_picture}  />
        )}

        </Grid>

      </Grid>
      </div>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);