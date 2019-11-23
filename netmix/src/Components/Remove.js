import React from 'react';
import './Remove.css';
import Button from '@material-ui/core/Button'

class Remove extends React.Component {

    render() {

        return (
            <div className="remove">
                <div class="remove_content">
                    <h1>Remove component</h1>
                    <p>Are you sure you want to remove {this.props.movie.Title} from this list?</p>
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                        {/* <p>{this.props.movie.Actors}</p> */}
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Remove;