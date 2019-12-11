import React from 'react';
import './MovieCard.css';
import poster from '../poster.png';
import Remove from './Remove'

class EmptyCard extends React.Component {

    render() {

        return (
    <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>This list is empty</h1>
				<div className="card_cat">
					<p className="rating">Oh No!</p>
					<p className="year"></p>
					<p className="genre"></p>
					<p className="time"></p>
				</div>
				<p className="disc">You need to add some items to this list. You can search for Movies, TV Series, Documentaries - anything you like!</p>
			<div className="social-btn">
				<a href="#search">
				<button>START SEARCHING NOW!
				</button></a>
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
			<img src={poster} alt="placeholder card"/>
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank" rel="noopener noreferrer">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
        )
    }
}

export default EmptyCard;