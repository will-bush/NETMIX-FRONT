import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import SearchResult from './SearchResult';

class SearchComponent extends React.Component {

    state = {
        search_query: '',
        search_result: null
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
            <div>
                <h1>Search</h1>
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
                <h2>Search Result</h2>
                {this.state.search_result ? 
                <SearchResult movie={this.state.search_result} user_id={this.props.user_id} lists={this.props.lists} showMovieonList={this.props.showMovieonList}/>
                : null}
            </div>
        )
    }
}

export default SearchComponent;