import React from 'react';
import './Review.css';
import Button from '@material-ui/core/Button'
import ReviewForm from './ReviewForm';

class Review extends React.Component {

    render() {

        return (
            <div className="review">
                <div class="review_content">
                    <h1>Review</h1>
                    {this.props.listing_data.review ? <><p>Review Score: {this.props.listing_data.review_score}</p>
                    <p>Review: {this.props.listing_data.review}</p></> : <ReviewForm />}
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                </div>
            </div>
        )
    }
}

export default Review;