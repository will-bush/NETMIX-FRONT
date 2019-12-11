import React from 'react';
import SearchDetails from './SearchDetails';
import API from '../API'
import Button from '@material-ui/core/Button'

class SearchResult extends React.Component {

    state = {
        show_detail: false,
        user: {},
        value: 0,
        show_lists: false
    }

    componentDidMount() {
    }

    handleAddClick = (movie, listID) => {
        API.addMovieToDB(movie)
        .then(resp => API.addMovieToList(listID, resp.id))
        .then(this.props.refreshData())
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    

    render() {

        return (
            <div>
                <img src={this.props.movie.Poster} />
                <h1>{this.props.movie.Title}</h1>
                 <Button variant='contained' color='primary' onClick={() => this.handleAddClick(this.props.movie, this.state.value)}>ADD TO LIST</Button>
                 <Button variant='contained' color='primary' onClick={() => this.setState({show_detail: !this.state.show_detail})}>SEE MORE INFO</Button>
                 <br />
                 <br />
                {this.state.show_detail ? <SearchDetails movie={this.props.movie}/> : null}
                <label>Choose a list:
                <select value={this.state.value} onChange={this.handleChange}>
                 {this.props.lists.map(list => <option value={list.id}>{list.list_name}</option>)}
                 </select>
                 </label>
            </div>
        )
    }
}

export default SearchResult;