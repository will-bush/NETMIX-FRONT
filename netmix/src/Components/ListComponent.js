import React from 'react';
import MovieCard from './MovieCard';
import './ListComponent.css';

class ListComponent extends React.Component {

    render() {
        // console.log('list_Data', this.props.list_data)
        return (
        <div>
            <h1>{this.props.list_data.list_name}</h1>
        <p className="noPadding">{this.props.list_data.description}</p>
            <p className="delete" onClick={() => this.props.deleteList(this.props.list_data.id)}>Delete list</p>
            {this.props.list_data.listings && this.props.list_data.listings.map(listing =>
            <MovieCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists}/>
            )}   
        </div>
    
        )
    }
}

export default ListComponent;