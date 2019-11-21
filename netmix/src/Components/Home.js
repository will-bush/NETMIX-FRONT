import React from 'react';
import SearchComponent from './SearchComponent';
import ListContainer from './ListContainer';
import { Route, withRouter, Switch } from 'react-router-dom';


class Home extends React.Component {

    render() {

        return (
            <div>
                <h1>HOME PAGE</h1>
                <SearchComponent />
                <ListContainer username={this.props.username}/>
            </div>
        )
    }
}

export default Home;