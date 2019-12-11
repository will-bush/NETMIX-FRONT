import React from 'react'
import { Button } from '@material-ui/core'

const Header = ({ username, signOut }) => (
  <header className='App-header'>
    <h1 className='App-title'>
      {username ? `Welcome back, ${username}!` : 'NETMIX'}
      <br />
      {username && (
        <Button onClick={signOut} variant='contained' color='primary'>
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
)

export default Header