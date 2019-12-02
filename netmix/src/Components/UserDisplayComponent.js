import React from 'react';
import API from '../API';
import SimpleSlider from "./Carousel";
import Button from '@material-ui/core/Button'


class UserDisplayComponent extends React.Component {

    // state = {
    //     user: {},
    //     lists: []
    // }

    // componentDidMount() {
    //     API.getUser(this.props.user.id).then(user_object => this.setState({
    //         user: user_object,
    //         lists: user_object.lists
    //       }))
    // }

    followUser = (id) => {
        console.log(id)
    }

    render() {

        return (
            <div>
                <h1>You are viewing {this.props.user.username}'s lists.</h1>
                <Button onClick={this.followUser} variant='contained' color='secondary'>
                  FOLLOW {this.props.user.username}
                </Button>
                    {this.props.user.lists ?
                      this.props.user.lists.map(list =>
                        <div className="connectSliderContainer">
                        <SimpleSlider id={list.id } key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>
                        </div>)
                        : null}
            </div>
        )
    }
}

export default UserDisplayComponent;