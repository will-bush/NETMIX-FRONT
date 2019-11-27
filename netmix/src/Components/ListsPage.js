import React from 'react';
import './ListsPage.css';
import ListComponent from './ListComponent';
// import ListShowCard from './ListShowCard';


class ListPage extends React.Component {

    state = {
        selected_list: ""
    }

    setList = (list) => {
        this.setState({
            selected_list: list
        })
    }

    render() {

        return (
            <div className="listPageTitle">
                <h1>YOUR LISTS</h1>
                {/* <ListShowCard /> */}
                {this.props.lists.map(list => <h3 onClick={() => this.setList(list)}>{list.list_name}</h3>)}
                {/* <h1>THIS AREA SHOULD DISPLAY EACH INDIVIDUAL ITEM FROM A SELECTED LIST, IN LIST FORMAT</h1> */}
                {this.state.selected_list ? <ListComponent id={this.state.selected_list.id } key={this.state.selected_listid } list_data={this.state.selected_list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/> : null }
            </div>
        )
    }
}

export default ListPage;