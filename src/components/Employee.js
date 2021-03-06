import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { inherits } from 'util';
import { Grid, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog, Slide, Snackbar, AppBar, Toolbar, IconButton } from '@material-ui/core';
import axios from 'axios';
import EditEmployee from './EditEmployee';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Employee extends React.Component {

  state= {
    key: this.props.key,
    open: false,
    openEdit: false,
    name: this.props.fullname,
  }

//handling the opening of the dialog
  handleOpenDialog = () => {
    this.setState({
      open: true,
    });
  }

//handling the closing of the dialog
  handleCloseDialog = () =>{
    this.setState({
      open: false,
    });
  }

  //handling the edit dialog open
  handleOpenEditDialog = () =>{
    this.setState({
      openEdit: true,
    })
  }

  //handling the edit dialog close
  handleCloseEditDialog = () =>{
    this.setState({
      openEdit: false,
    })
  }


  //remove employee
  removeEmployee = () => {
    axios.get('/api/removeEmployee/'+ this.props.id)
    .then(this.setState({open: false}),
      window.location.reload(), //reload current page
      )
    .catch(console.error);
  }


  render(){
  const { classes } = this.props;
  
  return (
    <div>
      <Card className={classes.card} style={{ width: '100%' }}>
        <CardMedia
          className={classes.media}
          image={this.props.profile_pic}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" color="primary" align="center">
          {this.props.fullname}
          </Typography>

          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Job Title:</u></b>  {this.props.job_title}
          </Typography>
          
          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Department:</u></b>   {this.props.department}
          </Typography>

          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Location:</u></b>   {this.props.location}
          </Typography>
          
          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Email:</u></b> {this.props.email}
          </Typography>

          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Mobile Number:</u></b>  {this.props.mobile}
          </Typography>

          <Typography gutterBottom component="p" style={{marginBottom: '5px'}}>
            <b><u>Gender:</u></b>   {this.props.gender}
          </Typography>

          <Typography component="p" style={{marginBottom: '5px'}}>
            <b><u>Date of Birth:</u></b>  {this.props.dob}
          </Typography>

          
        </CardContent>
        <Grid container justify="center">
        <CardActions>
          <Button size="medium" color="primary" onClick={this.handleOpenEditDialog}>
            Edit
          </Button>
          <Button size="medium" color="primary" onClick={this.handleOpenDialog}>
            Remove
          </Button>

          {/* remove dialog */}
          <Dialog
          open={this.state.open}
          keepMounted
          TransitionComponent={Transition}
          onClose={this.handleCloseDialog}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Remove Employee
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to remove the employee : {this.props.fullname} ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.removeEmployee} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        {/* //Edit Dialog */}
        <Dialog
        fullWidth
        open={this.state.openEdit}
        onClose={this.handleCloseEditDialog}
        TransitionComponent={Transition}
      >
      <AppBar className={classes.appBar}>
          <Toolbar>
              <IconButton color="inherit" onClick={this.handleCloseEditDialog} aria-label="Close">
                <CloseIcon />
              </IconButton>
          </Toolbar>
      </AppBar>

        <EditEmployee id={this.props.id} department={this.props.department_id} location={this.props.location_id} jobTitle={this.props.job_title_id} firstName={this.props.firstname} lastName={this.props.lastname} dateOfBirth={this.props.dob} email={this.props.email} mobileNumber={this.props.mobile} gender={this.props.gender} />

      </Dialog>
        </CardActions>
        </Grid>
      </Card>
    </div>
  );
}
}

Employee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Employee);