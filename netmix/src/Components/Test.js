import React from 'react';
import API from '../API'

class Test extends React.Component {

    state = {
        movie: {}
    }

  componentDidMount() {
    API.get("http://www.omdbapi.com/?apikey=a12b58ca&t=hostel").then(resp => this.setState({
          movie: resp
      }))
  }
  
   
    render() {

        return (
            <div>
                <img src={this.state.movie.Poster} />
    <p>{this.state.movie.Type}</p>
    <h1>{this.state.movie.Title}</h1>
        <p><b>Starring:</b> {this.state.movie.Actors}</p>
    <p>{this.state.movie.Plot}</p>
            </div>
        )
    }
}

export default Test;