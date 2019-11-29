import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import ResultCard from './ResultCard';
import './SearchComponent.css';
import NewListForm from './NewListForm';
import ResultsSlider from "./ResultsSlider";

class SearchComponent extends React.Component {

    state = {
        search_query: '',
        search_result: null,
        selected_result: null
    }

    resetSearch = () => {
        this.setState({
            search_result: null,
            selected_result: null
        })
    }

        displayResult = (id) => {
            API.searchByID(id)
            .then( resp => this.setState({
                selected_result: resp
            }))
        }


    handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

    handleSubmit = () => {
        this.resetSearch()
        API.search(this.state.search_query)
          .then(data => {
              this.setState({
                  search_result: data
                //   selected_result: null
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
                <h3>SEARCH</h3>
                {/* {this.props.lists.length === 0 ? <NewListForm user_id={this.props.user_id} add_list={this.props.add_list} reset={this.resetListForm}/> : null} */}
                <TextField
                variant="filled"
                className="input"
                color="secondary"
                    id='seachQuery'
                    label='What would you like to watch today?'
                    value={search_query}
                    onChange={handleChange}
                    margin='normal'
                    name='search_query'
                    type='text'
                    style = {{width: 300, margin: 25}}
                />
                <br/>
        <Button onClick={this.handleSubmit} variant='contained' color='secondary'>
          SUBMIT
        </Button>
                {/* <h2>Search Result</h2> */}
                {/* {this.state.search_result ? <ResultCard movie={this.state.search_result} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.resetSearch}/> */}
                {this.state.selected_result ? <ResultCard movie={this.state.selected_result} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.resetSearch}/> : null }
                {this.state.search_result ? <div className="ResultsSliderContainer"><ResultsSlider results={this.state.search_result} user_id={this.props.user_id} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.resetSearch} displayResult={this.displayResult}/></div>
                : null }
            </div>
        )
    }
}

export default SearchComponent;