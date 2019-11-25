import React from 'react';
// import API from '../API';
import Button from '@material-ui/core/Button';
import ListComponent from './ListComponent';
import NewlistForm from './NewListForm';

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
            <div>
                <h1>List Container</h1>
                <Button
                variant='contained'
                color='primary'
                onClick={() => this.setState({create_new_list: true})}>
                    CREATE A NEW LIST
                </Button>
                {this.state.create_new_list ?
                <NewlistForm user_id={this.props.user_id} add_list={this.props.add_list} reset={this.resetListForm}/>
                : null}
                {this.props.lists ?
                this.props.lists.map(list =>
                <ListComponent list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/>)
                : null}
            </div>
        )
    }
}

export default ListContainer;