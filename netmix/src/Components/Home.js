import React from 'react';
import SearchComponent from './SearchComponent';
import ListContainer from './ListContainer';
import { Route, withRouter, Switch } from 'react-router-dom';
import API from '../API'


class Home extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this.setState({
            user_id: this.props.user_id,
        })
        API.getUser(this.props.user_id).then(user_object => this.setState({
            user: user_object
          }))
    }

    addListToUser = (list) => {
        this.setState({
            user: {
                ...this.state.user,
                lists: [...this.state.user.lists, list]
            }
        })
    }

    showMovieOnList = (listID, movie) => {
        // WRITE A FUNCTION HERE THAT TAKES THE RESPONSE OF THE NEWLY CREATED LISTING AND PUSHES IT INTO THE CORRRECT LISTING ARRAY!
        }

    render() {

        return (
            <div>
                <h1>HOME PAGE</h1>
                <SearchComponent user_id={this.props.user_id} lists={this.state.user.lists}/>
                <ListContainer user_id={this.props.user_id} lists={this.state.user.lists} add_list={this.addListToUser}/>
            </div>
        )
    }
}

export default Home;