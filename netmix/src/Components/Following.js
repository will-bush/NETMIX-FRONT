import React from 'react';
import API from '../API';
import Button from '@material-ui/core/Button';
import UserDisplayComponent from './UserDisplayComponent'

class Following extends React.Component {

    state = {
        following_users: [],
        following_lists: [],
        selected_user: null
    }

    componentDidMount() {
        if (this.props.following_users) {
            this.props.following_users.map(object => this.getUserById(object.following_id))
        }
        else {
            console.log("error - no users/lists")
        }
        window.scrollTo(0, 0)
    }

    setUser = (user) => {
        this.setState({
            selected_user: user
        })
    }

    getUserById = (id) => {
        API.getUser(id)
        .then(resp => this.setState({
            following_users: [...this.state.following_users, resp]
        }))
    }

    render() {

        return (
            <div className="myListsContainer">
            <div className="blackHeader">
                <h1>Select a profile</h1>
                {this.state.following_users ? this.state.following_users.map(user => <div className="listItems"><Button variant='contained' color='secondary' onClick={() => this.setUser(user)}>{user.username}</Button></div>) : null}
                {this.state.selected_user ? <UserDisplayComponent user={this.state.selected_user} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists}/> : null }
                {/* {this.state.following_list_ids ? <h1>We got some lists!</h1> : null} */}
            </div>
            </div>
        )
    }
}

export default Following;