import React from 'react';
import './Details.css';
import Button from '@material-ui/core/Button'

class Details extends React.Component {

    render() {

        return (
            <div className="details">
                <div class="details_content">
                    <h1>Details component</h1>
                        <p>{this.props.movie.Actors}</p>
                        <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Details;