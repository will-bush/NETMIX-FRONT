import React from 'react';
import SearchComponent from './SearchComponent';
import ListContainer from './ListContainer';
import ListsPage from './ListsPage';
import Connect from './Connect';
import FeedPage from './FeedPage';
// import { Route, withRouter, Switch } from 'react-router-dom';
import API from '../API'
import NavBar from './NavBar'


class Home extends React.Component {

    state = {
        user: {},
        lists: [],
        page: ""
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    }

    componentDidMount() {
        this.setState({
            user_id: this.props.user_id,
        })
        API.getUser(this.props.user_id).then(user_object => this.setState({
            user: user_object,
            lists: user_object.lists
          }))
    }

    addListToUser = (list) => {
        this.setState({
                lists: [...this.state.user.lists, list]
        })
    }

    refreshData = () => {
        API.getUser(this.props.user_id).then(user_object => this.setState({
            lists: user_object.lists
          }))
    }

   refreshLists = () => {
    API.getUser(this.props.user_id).then(user_object => this.setState({
        lists: user_object.lists
      }))
    }

    deleteList = (listID) => {
        API.deleteLIST(listID)
        this.retrieve()
    }

    retrieve = () => {
        setTimeout(() => {
            this.refreshLists()
          }, 500);
    }

    // scrollToNewList = (id) => {
    //     document.getElementById(id).scrollIntoView();
    // }

    render() {

        return (
            <div>
                <NavBar setPage={this.setPage} signOut={this.props.signOut}/>
                {this.state.page === "" ? <><SearchComponent user_id={this.props.user_id} lists={this.state.lists} refreshLists={this.refreshLists} add_list={this.addListToUser}/>
                <ListContainer user_id={this.props.user_id} lists={this.state.lists} add_list={this.addListToUser} refreshLists={this.refreshLists} deleteList={this.deleteList} scrollToNewList={this.scrollToNewList}/> </>: null}
                {this.state.page === "lists" ? <ListsPage lists={this.state.lists} refreshLists={this.refreshLists} deleteList={this.deleteList}/> : null}
                {this.state.page === "feed" ? <FeedPage lists={this.state.lists} refreshLists={this.refreshLists} deleteList={this.deleteList}/> : null}
                {this.state.page === "connect" ? <Connect user_id={this.props.user_id}/> : null}
            </div>
        )
    }
}

export default Home;