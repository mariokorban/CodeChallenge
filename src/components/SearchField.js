import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import Employee from './Employee';

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


  //Component on launch to add all employees
  componentDidMount(){
    //ajax to call all the employees (using axios)
    axios.get('/api/allEmployees')
    .then( resp => {
       this.setState({
         employees: resp.data.response
       });
    })
    .catch(console.error)
  }


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

  //gets the value put in the field regarding it's name and sets it in the state
  handleTextChange = (event,searchValue) => {
      this.setState({ searchValue: event.target.value });
  };

  //Search method
  //ajax call for the api/... regarding the search panel
  search = () => {
  //if the search panel is search by name  
    if(this.props.field == "search-by-name"){
      axios.get('api/nameEmployees/'+this.state.searchValue)
      .then(resp => {
        this.setState({
          employees: resp.data.response
        });
     })
     .catch(console.error)
    }
    //if the search panel is search by department
    else if (this.props.field == "search-by-department"){
      axios.get('/api/departmentEmployees/'+this.state.searchValue)
      .then(resp => {
        this.setState({
          employees: resp.data.response
        });
     })
     .catch(console.error)
    }
  //if the search panel is search by location
    else if (this.props.field == "search-by-location"){
      axios.get('/api/locationEmployees/'+this.state.searchValue)
      .then(resp => {
        this.setState({
          employees: resp.data.response
        });
     })
     .catch(console.error)
    }
    //if the search panel is search by job title
    else if (this.props.field == "search-by-job-title"){
      axios.get('/api/jobTitleEmployees/'+this.state.searchValue)
      .then(resp => {
        this.setState({
          employees: resp.data.response
        });
     })
     .catch(console.error)
    }
  };

  render() {
    const { classes } = this.props;

    return (

      // Search div

      <div className={classes.container}>
        
        <Grid container direction='row' alignItems='center' justify='center' spacing={8}>

        <Grid item xs={3} sm={4} md={4} lg={4} xl={4}></Grid>

        <Grid item xs={5} sm={3} md={3} lg={3} xl={3}>
        <TextField
          id="textfield"
          placeholder={this.state.searchLabel}
          value={this.state.searchValue}
          onChange={this.handleTextChange}
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

      {/* Employees grid result */}
      <Grid container direction='row' jsutify='center' alignItems='center' alignContent='center' spacing={32} style={{ marginTop: '10px' }}>

        

        {/* Mapping all the employees resulting from the api */}
        {this.state.employees.map((employee) =>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Employee key={employee.id.toString()} id={employee.id} department_id={employee.department_id} location_id={employee.location_id} job_title_id={employee.job_title_id} firstname={employee.firstname} lastname={employee.lastname} fullname={employee.firstname+" "+employee.lastname} dob={employee.dob} mobile={employee.mobile_number} email={employee.email} gender={employee.gender} profile_pic={employee.profile_picture} department={employee.department_name} location={employee.location_name} job_title={employee.job_title} />
          </Grid>
        )}  

      </Grid>
      </div>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);