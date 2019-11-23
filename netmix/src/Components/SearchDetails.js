import React from 'react';
// import Button from '@material-ui/core/Button'

class SearchDetails extends React.Component {

    render() {

        return (
            <div>
                <h1>Search Details</h1>
        <p>{this.props.movie.Actors}</p>
            </div>
        )
    }
}

export default SearchDetails;