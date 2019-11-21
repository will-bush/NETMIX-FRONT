import React from 'react';
import SearchDetails from './SearchDetails';
import API from '../API'

class SearchResult extends React.Component {

    state = {
        show_detail: false
    }

    // componentDidMount() {
    //     this.setState({
    //         movie: this.props.movie
    //     })
    // }

    handleAddClick = (movie) => {
        API.addMovieToDB(movie)
        .then(resp => API.addMovieToList(3, resp.id))
        // .then(res => console.log(res))
    }

    render() {

        return (
            <div>
                <img src={this.props.movie.Poster} />
                <h1>{this.props.movie.Title}</h1>
                <button onClick={() => this.handleAddClick(this.props.movie)}>ADD MOVIE TO DB</button>
                <button onClick={() => this.setState({show_detail: !this.state.show_detail})}>MORE INFO</button>
                {this.state.show_detail ? <SearchDetails movie={this.props.movie}/> : null}
            </div>
        )
    }
}

export default SearchResult;