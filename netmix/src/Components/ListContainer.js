import React from 'react';
import Button from '@material-ui/core/Button';
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

    handleClick = () => {
        this.setState({create_new_list: true})
        window.scrollTo(0, 1000)
    }

    render() {

        return (
            <div className="listContainer" id="yourlists">
                <div className="blackHeader">
                    <h1>Your Lists</h1>
                    <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => this.handleClick()}>
                    CREATE A NEW LIST
                    </Button>
                    {this.state.create_new_list ?
                <NewlistForm user_id={this.props.user_id} add_list={this.props.add_list} reset={this.resetListForm} refreshLists={this.props.refreshLists} scrollToNewList={this.props.scrollToNewList}/>
                : null}
                </div>
                {this.props.lists ?
                this.props.lists.map(list =>
                <div className="ListSliderContainer" key={list.id} href={list.id}>
                     <SimpleSlider id={list.id } key={list.id } lists={this.props.lists} list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList}/></div>)
                     : null}
            </div>
        )
    }
}

export default ListContainer;