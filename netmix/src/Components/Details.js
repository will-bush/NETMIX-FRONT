import React from 'react';
import './Details.css';
import Button from '@material-ui/core/Button'

class Details extends React.Component {

    render() {

        return (
            <div className="details">
                <div class="details_content">
                    <h1>Details component</h1>
                        <p>Title: {this.props.movie.Title}</p>
                        <p>Year: {this.props.movie.Year}</p>
                        <p>Rated: {this.props.movie.Rated}</p>
                        <p>Released: {this.props.movie.Released}</p>
                        <p>Runtime: {this.props.movie.Runtime}</p>
                        <p>Genres: {this.props.movie.Genre}</p>
                        <p>Director: {this.props.movie.Director}</p>
                        <p>Writer: {this.props.movie.Writer}</p>
                        <p>Actors: {this.props.movie.Actors}</p>
                        <p>Plot: {this.props.movie.Plot}</p>
                        <p>Language: {this.props.movie.Language}</p>
                        <p>Country: {this.props.movie.Country}</p>
                        <p>Awards: {this.props.movie.Awards}</p>
                        <p>Metascore: {this.props.movie.Metascore}</p>
                        <p>IMDb Rating: {this.props.movie.imdbRating}</p>
                        <p>IMDb Votes: {this.props.movie.imdbVotes}</p>
                        <p>IMDb ID: {this.props.movie.imdbID}</p>
                        <p>Type: {this.props.movie.Type}</p>
                        <p>DVD: {this.props.movie.DVD}</p>
                        <p>Box Office: {this.props.movie.BoxOffice}</p>
                        <p>Production: {this.props.movie.Production}</p>
                        <p>Website: {this.props.movie.Website}</p>
                        <p>Total Seasons: {this.props.movie.totalSeasons}</p>
                        <p>Ratings: {this.props.movie.Ratings.length}</p>
                       

                        <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Details;