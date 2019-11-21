import React from 'react';
import SearchComponent from './SearchComponent';
import ListContainer from './ListContainer';
import { Route, withRouter, Switch } from 'react-router-dom';


class Home extends React.Component {

    state = {
        user_id: null,
        lists: null
    }

    componentDidMount() {
        this.setState({
            user_id: this.props.user_id,
        })
    }

    render() {

        return (
            <div>
                <h1>HOME PAGE</h1>
                <SearchComponent user_id={this.props.user_id}/>
                <ListContainer username={this.props.username} />
            </div>
        )
    }
}

export default Home;