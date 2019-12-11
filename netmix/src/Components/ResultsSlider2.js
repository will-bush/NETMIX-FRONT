import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResultPreviewCard from './ResultPreviewCard'
import BlankPreviewCard from './BlankPreviewCard'

class ResultSlider2 extends React.Component {

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
        {this.props.results.Search.length === 2 ?
          <Slider {...settings}>
            {this.props.results.Search.map(listing =>
                <div><ResultPreviewCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} displayResult={this.props.displayResult}/></div>
                ) }
                <BlankPreviewCard/>
                <BlankPreviewCard/>
                <BlankPreviewCard/>
          </Slider> : null}
      {this.props.results.Search.length === 3 ?
          <Slider {...settings}>
            {this.props.results.Search.map(listing =>
                <div><ResultPreviewCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} displayResult={this.props.displayResult}/></div>
                ) }
                <BlankPreviewCard/>
                <BlankPreviewCard/>
          </Slider> : null}
      {this.props.results.Search.length === 4 ?
          <Slider {...settings}>
            {this.props.results.Search.map(listing =>
                <div><ResultPreviewCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} displayResult={this.props.displayResult}/></div>
                ) }
                <BlankPreviewCard/>
                
          </Slider> : null}
      </div>
    );
  }
}

export default ResultSlider2;