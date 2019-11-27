import React from 'react';
import './ListsPage.css';
// import ListShowCard from './ListShowCard';


class ListPage extends React.Component {

    render() {

        return (
            <div className="listPageTitle">
                <h1>YOUR LISTS</h1>
                {/* <ListShowCard /> */}
                {this.props.lists.map(list => <h3>{list.list_name}</h3>)}
                <h1>THIS AREA SHOULD DISPLAY EACH INDIVIDUAL ITEM FROM A SELECTED LIST, IN LIST FORMAT</h1>
            </div>
        )
    }
}

export default ListPage;