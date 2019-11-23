import React from 'react';
// import Button from '@material-ui/core/Button'

class SearchDetails extends React.Component {

    render() {

        return (
            <div>
                <h1>Search Details</h1>
        <p>{this.props.movie.Actors}</p>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
            </div>
        )
    }
}

export default SearchDetails;