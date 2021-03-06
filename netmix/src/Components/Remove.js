import React from 'react';
import './Remove.css';
import Button from '@material-ui/core/Button'
import API from '../API';

class Remove extends React.Component {

    componentDidMount() {
        this.setState({
            function: this.props.refreshLists
        })
    }

    removeListing = (listingID) => {
        API.destroyListing(listingID)
        this.refresh()
    }

    refresh = () => {
        setTimeout(() => {
            this.state.function()
          }, 500);
    }

    render() {

        return (
            <div className="remove">
                <div class="remove_content">
                    <p>Are you sure you want to remove {this.props.movie.Title} from this list?</p>
                    <Button variant='contained' color='secondary' onClick={() => this.removeListing(this.props.listing_data.id)}>REMOVE</Button>
                    <Button className="hide_details" variant='contained' color='primary' onClick={this.props.hide}>CANCEL</Button>
                </div>
            </div>
        )
    }
}

export default Remove;