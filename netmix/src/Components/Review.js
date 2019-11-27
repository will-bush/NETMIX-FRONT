import React from 'react';
import './Review.css';
import Button from '@material-ui/core/Button'
import ReviewForm from './ReviewForm';

class Review extends React.Component {

    state = {
        review: null
    }

    componentDidMount() {
        this.setState({
            review: this.props.listing_data.review
        })
    }

    addReviewToState = (reviewResponse) => {
        this.setState({
            review: reviewResponse
        })
    }

    render() {

        return (
            <div className="review">
                <div class="review_content">
                    {/* <h1>Review</h1> */}
                    {this.state.review !== null ?
                    <><h3>Review: </h3><p>{this.state.review}</p></> : <ReviewForm id={this.props.listing_data.id} addReviewToState={this.addReviewToState}/>}
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                </div>
            </div>
        )
    }
}

export default Review;