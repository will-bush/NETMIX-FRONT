import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import './ReviewForm.css';

class ReviewForm extends React.Component {

    state = {
        review: ""
    }

    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
        API.postReview(this.props.id, this.state.review)
        .then( resp => this.props.addReviewToState(resp.review))
      }


    render() {

        const { review } = this.state
        const { handleChange } = this

        return (
            <div>
                <h3>Leave a review</h3>
                <TextField
                    name="review"
                    value={review}
                    onChange={handleChange}
                    label="Write your review here"
                    multiline
                    rows="4"
                    className="reviewForm"
                    margin="normal"
                    variant="filled"
                    fullwidth
                    color='secondary'
                    style = {{width: 684}}
                />
                <Button onClick={this.handleSubmit} className="submitButton" variant='contained' color='secondary'>SUBMIT</Button>
            </div>
        )
    }
}

export default ReviewForm;