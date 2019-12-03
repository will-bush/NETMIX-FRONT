import React from 'react';
import './ListsPage.css';
import ListComponent from './ListComponent';
// import ListShowCard from './ListShowCard';
import Button from '@material-ui/core/Button'


class ListPage extends React.Component {

    state = {
        selected_list: ""
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({
            selected_list: this.props.lists[0]
        })
        // this.setList(this.props.lists[0].list_name)
      }

    setList = (list) => {
        this.setState({
            selected_list: list
        })
    }

    resetSelected = () => {
        this.setState({
            selected_list: ""
        })
    }

    render() {

        return (
            
            <div className="myListsContainer">
                <div className="blackHeader">
                <h1>Select a list</h1>
                {/* <ListShowCard /> */}<div className="listBox">
                {/* {this.props.lists.map(list => <p className="listItems" onClick={() => this.setList(list)}>{list.list_name} - </p>)} */}
                {this.props.lists.map(list => <div className="listItems"><Button variant='contained' color='secondary' onClick={() => this.setList(list)}>{list.list_name}</Button></div>)} 
                </div>
                </div>
                {/* <h1>THIS AREA SHOULD DISPLAY EACH INDIVIDUAL ITEM FROM A SELECTED LIST, IN LIST FORMAT</h1> */}
                {this.state.selected_list ? <ListComponent id={this.state.selected_list.id } key={this.state.selected_listid } list_data={this.state.selected_list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList} resetSelected={this.resetSelected}/> : null }
            </div>
        )
    }
}

export default ListPage;