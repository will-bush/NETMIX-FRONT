import React from 'react';
import UserSlider from "./UserSlider";


class FollowingDisplayComponent extends React.Component {

    render() {

        return (
            <div>
                <h1>You are viewing {this.props.user.username}'s lists.</h1>
                    {this.props.user.lists ?
                      this.props.user.lists.map(list =>
                        <div className="connectSliderContainer">
                        <UserSlider user_id={this.props.user_id} id={list.id } key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>
                        </div>)
                        : null}
            </div>
        )
    }
}

export default FollowingDisplayComponent;