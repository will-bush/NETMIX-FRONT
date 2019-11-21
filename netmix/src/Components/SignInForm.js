import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'

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
        console.log(data)
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
      <div>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default SignInForm