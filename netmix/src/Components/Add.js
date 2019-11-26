import React from 'react';
import './Add.css';
import Button from '@material-ui/core/Button'
import API from '../API'

class Add extends React.Component {

    state = {
        value: 0
    }

    firstList = this.props.lists[0]
    firstListingID = this.firstList.id

    componentDidMount() {
        this.setState({
            value: this.firstListingID
        })
    }

    handleAddClick = (movie, listID) => {
        API.addMovieToDB(movie)
        .then(resp => API.addMovieToList(listID, resp.id))
        .then(() => this.props.refreshLists())
        .then(this.props.hide())
        .then(this.props.resetSearch())
        // .then(res => this.props.showMovieOnList(listID, res.content))
        // .then(this.props.refreshData())
        // .then(res => console.log(res))
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div className="add">
                <div class="add_content">
                    <h1>Choose a list:</h1>
                    {/* <p>Add a form here that allows a user to select an existing list to add the result to.</p> */}
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            {this.props.lists.map(list => <option value={list.id}>{list.list_name}</option>)}
                        </select>
                    </label>
                    {/* <p>MAYBE - Allow user to leave a written or scored review of the movie if they wish.</p>
                    <p>MAYBE - Allow user to create a new form at this point if they wish.</p>
                    <p>IS THIS FEATURE BETTER LOCATED IN THE MOVIECARD COMPONENT?</p> */}
                    <Button variant='contained' color='secondary' onClick={() => this.handleAddClick(this.props.movie, this.state.value)}>ADD TO LIST</Button>
                    <Button variant='contained' color='secondary' onClick={this.props.hide}>HIDE</Button>
                        {/* <p>{this.props.movie.Actors}</p> */}
                </div>
            </div>
        )
    }
}

export default Add;