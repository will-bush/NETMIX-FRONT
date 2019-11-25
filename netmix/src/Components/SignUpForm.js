import React, { Component } from 'react';
import API from "../API"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SignUpForm.css';  

export class SignUpForm extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    errors: {
        fullName: '',
        password: '',
        username: ''
      }
  }

  render() {

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              NETMIX
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return (
      <div className="background">
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        {/* <Avatar>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography className="title" component="h1" variant="h5">
          Sign up
        </Typography>
      <form>
        <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            autoFocus
            />
            {this.state.errors.fullName.length > 0 && 
                <span className='error'>{this.state.errors.fullName}</span>}
        <TextField
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Please choose a username"
            autoFocus
        />
        {this.state.errors.username.length > 0 && 
                <span className='error'>{this.state.errors.username}</span>}
        {/* <TextField
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
        />
        {this.state.errors.email.length > 0 && 
                <span className='error'>{this.state.errors.email}</span>} */}
        <TextField
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            autoFocus
        />
        {this.state.errors.password.length > 0 && 
         <span className='error'>{this.state.errors.password}</span>}
         {this.state.errors.length > 0 ?
         <Button
            disabled
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button>
        : 
        <Button
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button> }
      </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
      </div>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({ [event.target.name]: event.target.value });
    let errors = this.state.errors;

    switch (name) {
        case 'name': 
          errors.fullName = 
            value.length < 5
              ? 'Full Name must be at least 4 characters long!'
              : '';
          break;
          case 'username': 
          errors.username = 
          value.length < 4
              ? 'must start and end with a letter, number or _, and contain no special characters other than . and _'
              : '';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must have at least 8 characters, 1 number and 1 special character!'
              : '';
          break;
        default:
          break;
      }
    
      this.setState({errors, [name]: value}, ()=> {
          // console.log(errors)
      })
    }

  signUp = event => {
    event.preventDefault();
    console.log(this.state)
    API.signUp(this.state)
    .then(console.log)
}

}

export default SignUpForm;