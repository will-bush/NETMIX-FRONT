import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import Header from './Components/Header'
import SignInForm from './Components/SignInForm'
import Home from './Components/Home'

import './App.css'
import API from './API'

class App extends Component {
  state = {
    username: '',
    user_id: 0
  }

  signIn = user => {
    this.setState({ username: user.username, user_id: user.id  })
    localStorage.setItem('token', user.token)
  }

  signOut = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signIn(data)
          this.props.history.push('/home')
        })
        .catch(error => alert(error))
    }
  }

  render () {
    return (
      <div className='App'>
        <Header username={this.state.username} signOut={this.signOut} />
        <Switch>
          {/* <Route exact path='/' component={() => <h1>Home page!</h1>} /> */}
          <Route
            path='/' exact
            component={routerProps => (
              <SignInForm {...routerProps} signIn={this.signIn} />
            )}
          />
          <Route
            path='/home'
            component={routerProps => (
              <Home {...routerProps} signOut={this.signOut} username={this.state.username} user_id={this.state.user_id}/>
            )}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
