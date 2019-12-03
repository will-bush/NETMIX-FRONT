import React from 'react';
// import ListContainer from './ListContainer';
import API from '../API';
import RecentlyAdded from './RecentlyAdded';
import './FeedPage.css';

class FeedPage extends React.Component {

    state = {
        view: "list",
        lists: null
    }

    componentDidMount() {
        API.getUser(24)
        // .then(resp => console.log(resp.lists))
        .then(resp => this.setState({
            lists: resp.lists
        }))
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="feedPageContainer">
                <h1 className="blackHeader">
                Get inspired by some of our favourite lists...
                </h1>
                <RecentlyAdded user_id={this.props.user_id} lists={this.state.lists} add_list={this.addListToUser} refreshLists={this.refreshLists} deleteList={this.deleteList} scrollToNewList={this.scrollToNewList}/>
            </div>
        )
    }
}

export default FeedPage;