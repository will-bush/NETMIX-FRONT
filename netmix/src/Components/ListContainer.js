import React from 'react';
import API from '../API'

class ListContainer extends React.Component {

    state = {
        lists: [],
        username: ''
    }

    componentDidMount() {
        // if (this.props.username === '') this.props.history.push('/signin')
        // else {
            API.getLists()
            .then(lists => this.setState({
                lists: lists,
                username: this.props.username
            }))
        // }
    }

    render() {

        return (
            <div>
                <h1>List Container</h1>
                <h2>List Component</h2>
                <h3>List Item</h3>
                <h4>List Details</h4>
            </div>
        )
    }
}

export default ListContainer;