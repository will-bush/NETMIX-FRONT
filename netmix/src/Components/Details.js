import React from 'react';
import './Details.css';
import Button from '@material-ui/core/Button'

class Details extends React.Component {

    render() {

        return (
            <div className="details">
                <div class="details_content">
                    {/* <h1>Details component</h1> */}
                    <div className="column">
                        {/* <p>Title: {this.props.movie.Title}</p> */}
                        {/* <p>Year: {this.props.movie.Year}</p> */}
                        {/* <p>Rated: {this.props.movie.Rated}</p> */}
                        {/* <p>Released: {this.props.movie.Released}</p> */}
                        {/* <p>Runtime: {this.props.movie.Runtime}</p> */}
                        {/* <p>Genres: {this.props.movie.Genre}</p> */}
                        <p><strong>Director : </strong> {this.props.movie.Director}</p>
                        <p><strong>Writers : </strong> {this.props.movie.Writer}</p>
                        <p><strong>Actors : </strong> {this.props.movie.Actors}</p>
                        {/* <p>Plot: {this.props.movie.Plot}</p> */}
                        <p><strong>Language : </strong> {this.props.movie.Language}</p>
                        <p><strong>Country : </strong> {this.props.movie.Country}</p>
                        {/* <p>Awards: {this.props.movie.Awards}</p> */}
                        </div>
                        <div className="column">
                        <p><strong>Metascore : </strong>{this.props.movie.Metascore}</p>
                        <p><strong>IMDb Rating : </strong> {this.props.movie.imdbRating}</p>
                        <p><strong>IMDb Votes : </strong>{this.props.movie.imdbVotes}</p>
                        {/* <p>IMDb ID: {this.props.movie.imdbID}</p> */}
                        {/* <p>Type: {this.props.movie.Type}</p> */}
                        {/* <p>DVD: {this.props.movie.DVD}</p> */}
                        <p><strong>Box Office :</strong> {this.props.movie.BoxOffice}</p>
                        <p><strong>Production :</strong> {this.props.movie.Production}</p>
                        {/* <p>Website: {this.props.movie.Website}</p> */}
                        {/* <p>Total Seasons: {this.props.movie.totalSeasons}</p> */}
                        <p><strong>Ratings :</strong> {this.props.movie.Ratings.length}</p>
                        <a href={"https://www.imdb.com/title/" + this.props.movie.imdbID} target="_blank" rel="noopener noreferrer">View on IMDb</a>

                        </div>

                        <Button className="hide_details" variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Details;