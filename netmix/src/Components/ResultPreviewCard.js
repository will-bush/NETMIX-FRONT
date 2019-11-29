import React from 'react';
import './ResultPreviewCard.css';

class ResultPreviewCard extends React.Component {

    render() {

        return (
            <div className="ResultPreviewCard">
                {this.props.listing_data.Poster !== "N/A" ? <><img src={this.props.listing_data.Poster} />
                <p>{this.props.listing_data.Title}</p></> : null}
            </div>
        )
    }
}

export default ResultPreviewCard;