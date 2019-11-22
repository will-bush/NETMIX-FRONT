import React from 'react';
import API from '../API';

class MovieCard extends React.Component {

    state = {
        content: {}
    }

    componentDidMount() {
        API.getContent(this.props.listing_data.content_id)
        .then( resp => this.setState({
            content: resp
        }))
    }

    render() {

        return (
            <div>
                <img src={this.state.content.Poster}/>
                <h3>{this.state.content.Title}</h3>
            </div>
        )
    }
}

export default MovieCard;