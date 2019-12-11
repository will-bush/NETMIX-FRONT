import React from 'react';
import SearchComponent from './SearchComponent';
import ListContainer from './ListContainer';
import ListsPage from './ListsPage';
import Connect from './Connect';
import FeedPage from './FeedPage';
import API from '../API'
import NavBar from './NavBar'
import Following from './Following';


class Home extends React.Component {

    state = {
        user: {},
        lists: [],
        page: "",
        following_users: []
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
            lists: user_object.lists,
            following_users: user_object.userFollows,
            following_lists: user_object.listFollows
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
        lists: user_object.lists,
        following_users: user_object.userFollows
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

    render() {

        return (
            <div>
                <NavBar setPage={this.setPage} signOut={this.props.signOut}/>
                {this.state.page === "" ? <><SearchComponent user_id={this.props.user_id} lists={this.state.lists} refreshLists={this.refreshLists} add_list={this.addListToUser}/>
                <ListContainer user_id={this.props.user_id} lists={this.state.lists} add_list={this.addListToUser} refreshLists={this.refreshLists} deleteList={this.deleteList} scrollToNewList={this.scrollToNewList}/> </>: null}
                {this.state.page === "lists" ? <ListsPage lists={this.state.lists} refreshLists={this.refreshLists} deleteList={this.deleteList}/> : null}
                {this.state.page === "feed" ? <FeedPage lists={this.state.lists} refreshLists={this.refreshLists} deleteList={this.deleteList}/> : null}
                {this.state.page === "connect" ? <Connect user_id={this.props.user_id} lists={this.state.lists} refreshLists={this.refreshLists}/> : null}
                {this.state.page === "following" ? <Following user_id={this.props.user_id} following_users={this.state.following_users} following_lists={this.state.following_lists} lists={this.state.lists} refreshLists={this.refreshLists}/>: null }
            </div>
        )
    }
}

export default Home;