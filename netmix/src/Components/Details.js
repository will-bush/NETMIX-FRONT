import React from 'react';
import './Details.css';
import Button from '@material-ui/core/Button'

class Details extends React.Component {

    render() {

        return (
            <div className="details">
                <div class="details_content">
                    <div className="column">
                            <p><strong>Director : </strong> {this.props.movie.Director}</p>
                            <p><strong>Writers : </strong> {this.props.movie.Writer}</p>
                            <p><strong>Actors : </strong> {this.props.movie.Actors}</p>
                            <p><strong>Language : </strong> {this.props.movie.Language}</p>
                        <Button variant='contained' color='secondary' href={"https://www.imdb.com/title/" + this.props.movie.imdbID} target="_blank" rel="noopener noreferrer">View on IMDB</Button>
                        </div>
                        <div className="column">
                            <p><strong>Metascore : </strong>{this.props.movie.Metascore}</p>
                            <p><strong>IMDb Rating : </strong> {this.props.movie.imdbRating}</p>
                            <p><strong>IMDb Votes : </strong>{this.props.movie.imdbVotes}</p>
                            <p><strong>Box Office :</strong> {this.props.movie.BoxOffice}</p>
                            <p><strong>Production :</strong> {this.props.movie.Production}</p>
                        </div>
                        <Button className="hide_details" variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                </div>
            </div>
        )
    }
}

export default Details;