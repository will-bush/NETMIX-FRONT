import React from 'react';
import UserSlider from "./UserSlider";
import Button from '@material-ui/core/Button'
import API from '../API';


class UserDisplayComponent extends React.Component {

    state = {
        followed: false
    }

    followUser = (profileToFollowID) => {
        API.followUser(profileToFollowID, this.props.user_id)
        .then(() => this.props.refreshLists())
        this.setState({
            followed: true
        })
    }

    render() {

        return (
            <div>
                <h1>You are viewing {this.props.user.username}'s lists.</h1>
                {this.state.followed ? null : <Button onClick={() => this.followUser(this.props.user.id)} variant='contained' color='secondary'>
                  FOLLOW {this.props.user.username}
                </Button>}
                    {this.props.user.lists ?
                      this.props.user.lists.map(list =>
                        <div className="connectSliderContainer">
                            <UserSlider user_id={this.props.user_id} id={list.id } key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList} lists={this.props.lists}/>
                        </div>)
                        : null}
            </div>
        )
    }
}

export default UserDisplayComponent;