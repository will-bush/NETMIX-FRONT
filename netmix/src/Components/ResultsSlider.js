import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ResultCard from './ResultCard'
import ResultPreviewCard from './ResultPreviewCard'

class ResultSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 5
    //   width: 800
    };
    return (
        <>
        {/* <h1>{this.props.list_data.list_name}</h1>
        <p>{this.props.list_data.description}</p> */}
        {/* <p className="delete" onClick={() => this.props.deleteList(this.props.list_data.id)}>Delete list</p> */}
      <Slider {...settings}>
        {this.props.results && this.props.results.Search.map(listing =>
            <div><ResultPreviewCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists}/></div>
            )}  
      </Slider>
      </>
    );
  }
}

export default ResultSlider;