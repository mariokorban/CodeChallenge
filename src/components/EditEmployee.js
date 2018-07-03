import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Grid, Card, CardMedia,Button, MenuItem, Select, InputLabel, Input, FormControl} from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  media: {
    height: '100%',
    width: '100%',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,  
  },
});

class EditEmployee extends React.Component {

  constructor(props){
    super(props)

  this.state = {
      jobTitles: [],
      departments: [],
      locations: [],
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      mobileNumber: this.props.mobileNumber,
      email: this.props.email,
      jobTitle: this.props.jobTitle,
      dateOfBirth: this.props.dateOfBirth,
      department: this.props.department,
      location: this.props.location,
      gender: this.props.gender,
  };

  this.editEmployee = this.editEmployee.bind(this);
}


  //when the component mounts locatoins,department and job titles are loaded into select field from the database
  componentDidMount(){
    axios.get('/api/getJobTitles')
    .then(resp =>{
      this.setState({
        jobTitles: resp.data.response,
      })
    })
    .catch(console.error)

    axios.get('/api/getDepartments')
    .then(resp =>{
      this.setState({
        departments: resp.data.response,
      })
    })
    .catch(console.error)

    axios.get('/api/getLocations')
    .then(resp =>{
      this.setState({
        locations: resp.data.response,
      })
    })
    .catch(console.error)
  }

  //test to see the states result
  showStates = () => {
    console.log(this.state);
  }


  //handle value change
  handleChange = event => {
    this.setState({
       [event.target.name]: event.target.value,
    });
  };

  //function that sends the state of a new employee to the api to be added
  editEmployee = () => {

    var data = {
        id: this.props.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        email: this.state.email,
        mobileNumber: this.state.mobileNumber ,
        jobTitle: this.state.jobTitle,
        department: this.state.department,
        location: this.state.location,
        gender: this.state.gender
    }

    console.log(data);

    fetch('/api/editEmployee',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(resp => {
        if(resp.status == 200) {
          alert(data.firstName+" "+data.lastName+" edited succesfully !");
          window.location.reload();
      }
    })
    .catch(function(err) {
      alert("Something went wrong !");
        console.log(err)
    });
  } 

  render(){
  const { classes } = this.props;


  return (
    <div style={{ margin: '50px' }}>
    <Grid container justify='center' alignItems='center' alignContent='center' spacing={24} style={{marginTop: '20px'}}>

    <Grid item lg={12} xl={12}>
      <Paper className={classes.root} elevation={1}>
        <form className={classes.container}>
        <Grid container justify='center' alignItems='center' alignContent='center' spacing={8}>
      
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <TextField
          id="firstname"
          label="First Name"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange}
          name="firstName"
          margin="normal"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="lastname"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange}
          name="lastName"
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="mobileNumber"
          label="Mobile Number"
          className={classes.textField}
          value={this.state.mobileNumber}
          onChange={this.handleChange}
          name="mobileNumber"
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

      <FormControl>
          <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
          <Select
            native
            value={this.state.jobTitle}
            onChange={this.handleChange}
            className={classes.textField}
            margin= "normal"
            inputProps={{
              name: 'jobTitle',
              id: 'jobTitle',
            }}
          >
            <option value="" />
            {this.state.jobTitles.map((jobTitle)=>
            <option key={jobTitle.job_title_id.toString()} value={jobTitle.job_title_id}>{jobTitle.job_title}</option>
            )}
            
          </Select>
        </FormControl>

      </Grid>
      
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        value={this.state.dateOfBirth}
        onChange={this.handleChange}
        name='dateOfBirth'
        margin= "normal"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

      <FormControl>
          <InputLabel htmlFor="department">Department</InputLabel>
          <Select
            native
            value={this.state.department}
            onChange={this.handleChange}
            className={classes.textField}
            margin= "normal"
            inputProps={{
              name: 'department',
              id: 'department',
            }}
          >
            <option value="" />
            {this.state.departments.map((department)=>
            <option key={department.department_id.toString()} value={department.department_id}>{department.department_name}</option>
            )}
            
          </Select>
        </FormControl>

      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      
      <FormControl>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Select
            native
            margin= "normal"
            value={this.state.location}
            onChange={this.handleChange}
            className={classes.textField}
            inputProps={{
              name: 'location',
              id: 'location',
            }}
          >
            <option value="" />
            {this.state.locations.map((location)=>
            <option key={location.location_id.toString()} value={location.location_id}>{location.location_name}</option>
            )}
            
          </Select>
        </FormControl>

      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      
      <FormControl>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Select
            native
            value={this.state.gender}
            onChange={this.handleChange}
            className={classes.textField}
            margin= "normal"
            inputProps={{
              name: 'gender',
              id: 'gender',
            }}
          >
            <option value="" />
            <option value={'Male'}>Male</option>
            <option value={'Female'}>Female</option>
            
          </Select>
        </FormControl>

      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Button variant="contained" size="medium" color="primary" onClick={this.editEmployee} className={classes.button} style={{float: 'right'}}>
          Save Changes
        </Button>
      </Grid>
      
      </Grid>
        </form>
      </Paper>
      </Grid>
    </Grid>
    </div>
  );
}
}

EditEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditEmployee);