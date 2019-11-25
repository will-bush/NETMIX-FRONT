import React from 'react';
import './Review.css';
import Button from '@material-ui/core/Button'

class Review extends React.Component {

    render() {

        return (
            <div className="review">
                <div class="review_content">
                    <h1>Review component</h1>
                    <p>Review Score: {this.props.listing_data.review_score}</p>
                    <p>Review: {this.props.listing_data.review}</p>
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                        {/* <p>{this.props.movie.Actors}</p> */}
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Review;