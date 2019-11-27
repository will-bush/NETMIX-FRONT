import React from 'react';
import API from '../API';

class UserDisplayComponent extends React.Component {

    state = {
        user: {},
        lists: []
    }

    componentDidMount() {
        API.getUser(this.props.user_id).then(user_object => this.setState({
            user: user_object,
            lists: user_object.lists
          }))
    }

    render() {

        return (
            <div>
    <h1>This is a show page for {this.props.user.username}</h1>
    {this.state.lists ?
                this.state.lists.map(list =>
                <SimpleSlider id={list.id } key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>)
                : null}
            </div>
        )
    }
}

export default UserDisplayComponent;