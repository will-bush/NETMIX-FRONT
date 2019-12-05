import React from 'react';
import './ResultPreviewCard.css';
import poster from '../poster.png'

class BlankPreviewCard extends React.Component {

    render() {

        return (
            <div className="ResultPreviewCard">
                {/* {this.props.listing_data.Poster !== "N/A" ? <p><img className="resultPreview" src={this.props.listing_data.Poster} alt={this.props.listing_data.Title} />
                <b>{this.props.listing_data.Title}</b></p> : null}
                {this.props.listing_data.Poster === "N/A" ? <p> */}
                <img className="resultPreview"/>

                {/* <b>{this.props.listing_data.Title}</b></p> : null} */}
            </div>
        )
    }
}

export default BlankPreviewCard;