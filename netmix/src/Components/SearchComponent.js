import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import ResultCard from './ResultCard';
import './SearchComponent.css';

class SearchComponent extends React.Component {

    state = {
        search_query: '',
        search_result: null
    }

    resetSearch = () => {
        this.setState({
            search_result: null
        })
    }

    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
        API.search(this.state.search_query)
          .then(data => {
              this.setState({
                  search_result: data
              })
            if (data.error) throw Error(data.error)
          })
          .catch(error => console.log(error))
      }

    render() {

        const { search_query } = this.state
        const { handleChange } = this

        return (
            <div className="search">
                {/* <h1>Search</h1> */}
                <TextField
                    id='seachQuery'
                    label='What would you like to watch today?'
                    value={search_query}
                    onChange={handleChange}
                    margin='normal'
                    name='search_query'
                    type='text'
                    style = {{width: 270, margin: 25}}
                />
                <br/>
        <Button onClick={this.handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
                {/* <h2>Search Result</h2> */}
                {this.state.search_result ? <ResultCard movie={this.state.search_result} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.resetSearch}/>
                // <ResultCard movie={this.state.search_result} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.resetSearch}/>
                : null}
            </div>
        )
    }
}

export default SearchComponent;