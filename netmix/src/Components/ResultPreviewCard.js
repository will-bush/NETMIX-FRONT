import React from 'react';
import './ResultPreviewCard.css';

class ResultPreviewCard extends React.Component {

    render() {

        return (
            <div className="ResultPreviewCard" onClick={() => this.props.displayResult(this.props.listing_data.imdbID)}>
                {this.props.listing_data.Poster !== "N/A" ? <p><img className="resultPreview" src={this.props.listing_data.Poster} />
                <b>{this.props.listing_data.Title}</b></p> : null}
            </div>
        )
    }
}

export default ResultPreviewCard;