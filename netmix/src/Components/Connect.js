import React from 'react';
import './Connect.css';
import UserDisplayComponent from './UserDisplayComponent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'

class Connect extends React.Component {

    state = {
        search_query: '',
        search_result: null,
        selected_result: null,
        users: null
    }

    componentDidMount() {
        API.getAllUsers()
        .then(resp => this.setState({
            users: resp
        }))
        window.scrollTo(0, 0)
    }

    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
        const results = this.state.users.filter(user => user.username === this.state.search_query);
        this.setState({
            search_result: results
        })
    }

    render() {

        const { search_query } = this.state
        const { handleChange } = this

        return (
            <div className="connectContainer">
                <h1>Find other users</h1>
                <TextField
                variant="filled"
                className="input"
                color="secondary"
                    id='seachQuery'
                    label='Please enter a username'
                    value={search_query}
                    onChange={handleChange}
                    margin='normal'
                    name='search_query'
                    type='text'
                    style = {{width: 300, margin: 25}}
                />
                <br/>
        <Button onClick={this.handleSubmit} variant='contained' color='secondary'>
          SUBMIT
        </Button>
                {this.state.search_result && this.state.search_result.length !== 0 ? <UserDisplayComponent user={this.state.search_result[0]} user_id={this.props.user_id}/> : null }
                {this.state.search_result && this.state.search_result.length === 0 ? <h1>Sorry, we could find a user called {this.state.search_query}!</h1> : null }
            </div>
        )
    }
}

export default Connect;