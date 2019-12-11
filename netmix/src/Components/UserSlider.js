import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowCard from './ShowCard'
import './Carousel.css';
import API from '../API';


class UserSlider extends React.Component {

  followList = (listToFollowID) => {
    API.followList(listToFollowID, this.props.user_id)
}

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
            <Slider {...settings}>
            {this.props.list_data.listings && this.props.list_data.listings.map(listing =>
                <div><ShowCard key={listing.id} listing_data={listing} refreshLists={this.props.refreshLists} lists={this.props.lists}/></div>
                )}  
            </Slider>
        </div>
    );
  }
}

export default UserSlider;