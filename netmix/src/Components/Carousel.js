import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from './MovieCard'
import EmptyCard from './EmptyCard'
import './Carousel.css';

class SimpleSlider extends React.Component {
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
        <a href="#search"><p className="delete">Add items to this list</p></a>
      <Slider {...settings}>
            {this.props.list_data.listings && this.props.list_data.listings.length !== 0 ? this.props.list_data.listings.map(listing =>
            <MovieCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} lists={this.props.lists}/>
            ) : <EmptyCard/>}
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;