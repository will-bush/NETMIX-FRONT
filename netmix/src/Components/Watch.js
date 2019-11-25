import React from 'react';
import './Watch.css';
import Button from '@material-ui/core/Button'
import API from '../API';

class Watch extends React.Component {

    // WHEN COMPONENT MOUNTS USE THE MOVIE TITLE TO CONDUCT AN API CALL TO UTELLY
    // ITERATE OVER THE RESPONSE TO GENERATE A CLICKABLE LINK TO THE SOURCE 

    render() {

        return (
            <div className="watch">
                <div class="watch_content">
                    <h1>Watch component</h1>
                    <p>You can currently watch {this.props.movie.Title} on the following sites:</p>
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Watch;