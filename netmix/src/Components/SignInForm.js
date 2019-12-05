import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import logo from '../netmix_drop.png'

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    API.signIn(this.state.username, this.state.password)
      .then(data => {
        // check if we got an error back
        if (data.error) throw Error(data.error)
        // here we know for sure that there was no error
        this.props.signIn(data)
        // console.log(data)
        this.props.history.push('/home')
      })
      .catch(error => console.log(error))
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div className="background">
        <img className="darklogo" src={logo} alt='logo' />
        <Container className="contain" component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        {/* <Avatar>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography className="title" component="h1" variant="h5">
          Sign In
        </Typography>
      <div>
        <TextField
          variant="filled"
          className="input"
          color="secondary"
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
          type="text"
          required
          // fullWidth
        />
        <br />
        <TextField
          className="input"
          variant="filled"
          color="secondary"
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
          required
          // fullWidth
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color="secondary">
          SIGN IN
        </Button>
      </div>
      </div>
      </Container>
      </div>
    )
  }
}

export default SignInForm