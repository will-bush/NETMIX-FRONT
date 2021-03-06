import React from 'react';
import './ListsPage.css';
import ListComponent from './ListComponent';
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
                        <div className="listBox">
                            {this.props.lists.map(list => <div key={list.id} className="listItems"><Button variant='contained' color='secondary' onClick={() => this.setList(list)}>{list.list_name}</Button></div>)} 
                        </div>
                </div>
                {this.state.selected_list ? <ListComponent lists={this.props.lists} id={this.state.selected_list.id } key={this.state.selected_list.id } list_data={this.state.selected_list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList} resetSelected={this.resetSelected}/> : null }
            </div>
        )
    }
}

export default ListPage;