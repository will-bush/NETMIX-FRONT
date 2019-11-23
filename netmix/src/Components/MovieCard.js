import React from 'react';
import API from '../API';
import './MovieCard.css';
import SearchDetails from './SearchDetails';

class MovieCard extends React.Component {

    state = {
        content: {},
        show_detail: false
    }

    componentDidMount() {
        API.getContent(this.props.listing_data.content_id)
        .then( resp => this.setState({
            content: resp
        }))
    }

    render() {

        return (
            // <div>
            //     <img src={this.state.content.Poster}/>
            //     <h3>{this.state.content.Title}</h3>
    <div class="wrapper">
	<div class="main_card">
		<div class="card_left">
			<div class="card_datails">
				<h1>{this.state.content.Title}</h1>
				<div class="card_cat">
					<p class="PG">{this.state.content.Rated}</p>
					<p class="year">{this.state.content.Released}</p>
					<p class="genre">{this.state.content.Genre}</p>
					<p class="time">{this.state.content.Runtime}</p>
				</div>
				<p class="disc">{this.state.content.Plot}</p>
				<a href={"https://www.imdb.com/title/" + this.state.content.imdbID} target="_blank">Read More</a>
			<div class="social-btn">
        {/* <!-- WATCH TRAILER--> */}
				<button onClick={() => this.setState({show_detail: !this.state.show_detail})}>
        <i class="fas fa-play"></i> {this.state.show_detail ? "HIDE INFO" : "SHOW INFO"}
				</button>
				{/* <!-- GET--> */}
				{/* <button>
					<i class="fas fa-download"></i> DOWNLOAD
				</button> */}
				{/* <!--USERS RATINGS--> */}
				{/* <button>
					<i class="fas fa-thumbs-up"></i> 97%
				</button> */}
				{/* <!--BOOKMARK--> */}
				{/* <button>
					<i class="fas fa-star"></i>
				</button> */}
			</div>	
			</div>
		</div>
		<div class="card_right">
			<div class="img_container">
				<img src={this.state.content.Poster} alt=""/>
				</div>
				<div class="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank">
						<i class="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
        {this.state.show_detail ? <SearchDetails movie={this.state.content}/> : null}
	</div>
// </div>
        )
    }
}

export default MovieCard;