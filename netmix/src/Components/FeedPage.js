import React from 'react';
import API from '../API';
import RecentlyAdded from './RecentlyAdded';
import './FeedPage.css';

class FeedPage extends React.Component {

    state = {
        view: "list",
        netmix_lists: null
    }

    componentDidMount() {
        API.getUser(3)
        .then(resp => this.setState({
            netmix_lists: resp.lists
        }))
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="feedPageContainer">
                <h1 className="blackHeader">
                Get inspired by some of our favourite lists...
                </h1>
                <RecentlyAdded user_id={this.props.user_id} lists={this.props.lists} netmix_lists={this.state.netmix_lists} refreshLists={this.props.refreshLists}/>
            </div>
        )
    }
}

export default FeedPage;