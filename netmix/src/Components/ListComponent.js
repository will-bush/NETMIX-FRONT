import React from 'react';
import ListMovieCard from './ListMovieCard';
import EmptyCard from './EmptyCard'
import './ListComponent.css';

class ListComponent extends React.Component {

    handleDelete = () => {
        this.props.deleteList(this.props.list_data.id)
        this.props.resetSelected()
    }

    render() {
        
        return (
        <div className="listComponentDiv">
            <h1>{this.props.list_data.list_name}</h1>
            <p className="noPadding">{this.props.list_data.description}</p>
            <p className="delete" onClick={() => this.handleDelete()}>Delete list</p>
            {this.props.list_data.listings && this.props.list_data.listings.length !== 0 ? this.props.list_data.listings.map(listing =>
            <ListMovieCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} lists={this.props.lists}/>
            ) : <EmptyCard/>}
        </div>
    
        )
    }
}

export default ListComponent;