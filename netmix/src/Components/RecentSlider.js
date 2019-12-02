import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowCard from './ShowCard'
import './Carousel.css';

class RecentSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="sliderSection">
        <h1>{this.props.list_data.list_name}</h1>
        <p>{this.props.list_data.description}</p>
        {/* <p className="delete" onClick={() => this.props.deleteList(this.props.list_data.id)}>Delete list</p> */}
      <Slider {...settings}>
        {this.props.list_data.listings && this.props.list_data.listings.map(listing =>
            <div><ShowCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists}/></div>
            )}  
      </Slider>
      </div>
    );
  }
}

export default RecentSlider;