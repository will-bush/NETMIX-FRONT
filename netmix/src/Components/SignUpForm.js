import React, { Component } from 'react';
import API from "../API"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SignUpForm.css';  
import logo from '../netmix_drop.png'

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

    return (
      <div className="background">
        <img className="darklogo" src={logo} alt='logo' />
        <Container className="contain" component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="title" component="h1" variant="h5">
          Sign Up
        </Typography>
      <form>
        <TextField
            color="secondary"
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            variant="filled"
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
            color="secondary"
            className="input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Please choose a username"
            autoFocus
        />
        {this.state.errors.username.length > 0 && 
                <span className='error'>{this.state.errors.username}</span>}
        <TextField
            color="secondary"
            className="input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            variant="filled"
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
            color="secondary"
        >Sign up</Button>
        : 
        <Button
            type="submit"
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="secondary"
        >Sign up</Button> }
      </form>
      </div>
      <p>Already a member?</p>
        <Button onClick={() => this.props.history.push('/signin')} variant='contained' color="secondary">
          SIGN IN
        </Button>
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
            value.length < 4
              ? 'Full Name must be at least 4 characters long!'
              : '';
          break;
          case 'username': 
          errors.username = 
          value.length < 4
              ? 'Username must be at least 4 characters long'
              : '';
          break;
        case 'password': 
          errors.password = 
            value.length < 6
              ? 'Password must be at least 6 characters'
              : '';
          break;
        default:
          break;
      }
    
      this.setState({errors, [name]: value}, ()=> {
      })
    }

  signUp = event => {
    event.preventDefault();
    let user = { user: {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    }
    }
    API.signUp(user)
    .then(resp => this.props.signIn(resp))
    this.props.history.push('/home')
}

}

export default SignUpForm;