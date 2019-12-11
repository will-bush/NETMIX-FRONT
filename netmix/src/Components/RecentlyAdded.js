import React from 'react';
import './ListContainer.css';
import RecentSlider from "./RecentSlider";

class RecentlyAdded extends React.Component {

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
                {this.props.netmix_lists ?
                this.props.netmix_lists.map(list =>
                    <div className="ListSliderContainer">
                    <RecentSlider id={list.id } key={list.id } list_data={list} refreshLists={this.props.refreshLists} deleteList={this.props.deleteList} lists={this.props.lists}/></div>)
                    : null}
            </div>
        )
    }
}

export default RecentlyAdded;