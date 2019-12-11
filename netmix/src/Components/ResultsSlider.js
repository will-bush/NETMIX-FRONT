import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResultPreviewCard from './ResultPreviewCard'

class ResultSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div className="wrapper">
          <Slider {...settings}>
            {this.props.results && this.props.results.Search.map(listing =>
                <div><ResultPreviewCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} displayResult={this.props.displayResult}/></div>
                )}  
          </Slider>
      </div>
    );
  }
}

export default ResultSlider;