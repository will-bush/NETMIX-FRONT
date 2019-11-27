import React from 'react';
// import API from '../API';
import Button from '@material-ui/core/Button';
import ListComponent from './ListComponent';
import NewlistForm from './NewListForm';
import './ListContainer.css';
import SimpleSlider from "./Carousel";

class ListContainer extends React.Component {

    state = {
        create_new_list: false,
    }

    resetListForm = () => {
        this.setState({
            create_new_list: false
        })
    }

    render() {

        return (
            <div className="listContainer">
                <h1>Your Lists</h1>
                <Button
                variant='contained'
                color='secondary'
                onClick={() => this.setState({create_new_list: true})}>
                    CREATE A NEW LIST
                </Button>
                {this.state.create_new_list ?
                <NewlistForm user_id={this.props.user_id} add_list={this.props.add_list} reset={this.resetListForm} refreshLists={this.props.refreshLists} scrollToNewList={this.props.scrollToNewList}/>
                : null}
                {/* {this.props.lists ?
                this.props.lists.map(list =>
                <ListComponent id={list.id }key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>)
                : null} */}
                {this.props.lists ?
                this.props.lists.map(list =>
                <SimpleSlider id={list.id } key={list.id }list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>)
                : null}
            </div>
        )
    }
}

export default ListContainer;