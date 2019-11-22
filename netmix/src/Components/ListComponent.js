import React from 'react';
import MovieCard from './MovieCard';

class ListComponent extends React.Component {

    render() {
        console.log('list_Data', this.props.list_data)
        return (
        <div>
            <h1>List Name: {this.props.list_data.list_name}</h1>
            <p>Delete list</p>
            {this.props.list_data.listings && this.props.list_data.listings.map(listing =>
            <MovieCard listing_data={listing}/>
            )}   
        </div>
    
        )
    }
}

export default ListComponent;