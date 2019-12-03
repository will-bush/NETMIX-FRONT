import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'

class NewListForm extends React.Component {

  state = {
    list_name: '',
    list_description: ''
  }

  handleSubmit = () => {
      let listData = {
          user_id: this.props.user_id,
          list_name: this.state.list_name,
          description: this.state.list_description
      }
      API.createList(listData)
      .then(() => this.props.refreshLists())
      // .then(resp => this.props.add_list(resp))
      .then(this.props.reset())
      // .then(this.props.refreshLists())
    //   .then(console.log)
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { list_name, list_description } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div href="newList">
        <TextField
          variant="filled"
          className="input"
          color="secondary"
          id='listnameInput'
          label='List Name'
          value={list_name}
          onChange={handleChange}
          margin='normal'
          name='list_name'
        />
        <br />
        <TextField
          variant="filled"
          className="input"
          color="secondary"
          id='listdescriptionInput'
          label='List Description'
          value={list_description}
          onChange={handleChange}
          margin='normal'
          name='list_description'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='secondary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default NewListForm;