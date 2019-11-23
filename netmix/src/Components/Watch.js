import React from 'react';
import './Watch.css';
import Button from '@material-ui/core/Button'

class Watch extends React.Component {

    render() {

        return (
            <div className="watch">
                <div class="watch_content">
                    <h1>Watch component</h1>
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                        {/* <p>{this.props.movie.Actors}</p> */}
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Watch;