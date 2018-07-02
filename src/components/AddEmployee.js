import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Grid, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core';

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
});

class AddEmployee extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    jobTitle: '',
    dateOfBirth: '',
    department: '',
    nationality: '',
    location: '',
    gender: '',
  };

  handleChange = name => event => {
    this.setState({
      // [name]: event.target.value,
    });
  };

  render(){
  const { classes } = this.props;


  return (
    <div style={{ marginTop: '50px' }}>
    <Grid container spacing={24}>
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>

    <Grid item lg={8} xl={8}>
      <Paper className={classes.root} elevation={1}>
        <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify='center' spacing={8}>

        {/* upload image container */}
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Card className={classes.card} style={{ width: '100%', height: '100%' }}>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </Grid>

      {/* container of the add forms */}
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
      <Grid container>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="firstname"
          label="First Name"
          className={classes.textField}
          //value={this.state.firstName}
          margin="normal"
        />
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="lastname"
          label="Last Name"
          className={classes.textField}
          // value={this.state.lastName}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="mobileNumber"
          label="Mobile Number"
          className={classes.textField}
          // value={this.state.mobileNumber}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="email"
          label="Email"
          className={classes.textField}
          // value={this.state.email}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="jobTitle"
          label="Job Title"
          className={classes.textField}
          // value={this.state.jobTitle}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="dob"
          label="Date of Birth"
          className={classes.textField}
          // value={this.state.dateOfBirth}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="department"
          label="Department"
          className={classes.textField}
          // value={this.state.department}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="location"
          label="Location"
          className={classes.textField}
          // value={this.state.location}
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <TextField
          id="gender"
          label="Gender"
          className={classes.textField}
          // value={this.state.gender}
          margin="normal"
        />
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}></Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button variant="contained" size="medium" color="primary" className={classes.button} style={{ float: 'right' }}>
          Add Employee
        </Button>
      </Grid>
      
      </Grid>
      </Grid>
        </Grid>
        </form>
      </Paper>
      </Grid>

    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
    </Grid>
    </div>
  );
}
}

AddEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddEmployee);