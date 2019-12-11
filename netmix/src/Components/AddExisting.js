import React from 'react';
import './Add.css';
import Button from '@material-ui/core/Button'
import API from '../API'

class AddExisting extends React.Component {

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
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div className="add">
                <div class="add_content">
                    <h3>Choose a list:</h3>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            {this.props.lists.map(list => <option value={list.id}>{list.list_name}</option>)}
                        </select>
                    </label>
                    <br />
                    <br />
                    <Button variant='contained' color='secondary' onClick={() => this.handleAddClick(this.props.movie, this.state.value)}>ADD TO LIST</Button>
                    <Button className="hide_details" variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                </div>
            </div>
        )
    }
}

export default AddExisting;