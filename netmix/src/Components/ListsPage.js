import React from 'react';
// import ListShowCard from './ListShowCard';


class ListPage extends React.Component {

    render() {

        return (
            <div>
                <h1>THIS IS THE LIST PAGE</h1>
                {/* <ListShowCard /> */}
        {this.props.lists.map(list => <h3>{list.list_name}</h3>)}
            </div>
        )
    }
}

export default ListPage;