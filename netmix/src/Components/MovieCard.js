import React from 'react';
import API from '../API';
import './MovieCard.css';
import Details from './Details';
import Watch from './Watch';
import Review from './Review';
import Remove from './Remove'

class MovieCard extends React.Component {

    state = {
        content: {},
        show_detail: false,
        view: ""
    }

    componentDidMount() {
        API.getContent(this.props.listing_data.content_id)
        .then( resp => this.setState({
            content: resp
        }))
    }

    hideExpandedView = () => {
        this.setState({
            view: ""
        })
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
        {/* <!-- SHOW INFO --> */}
				<button onClick={() => this.setState({view: "details"})}>
                <i class="fas fa-play"></i>MORE INFO
                {/* {this.state.show_detail ? "HIDE INFO" : "MORE INFO"} */}
				</button>
				{/* <!-- GET SOURCES--> */}
				<button onClick={() => this.setState({view: "watch"})}>
					<i class="fas fa-download"></i> WATCH
				</button >
				{/* <!--CREATE REVIEW --> */}
				<button onClick={() => this.setState({view: "review"})}>
					<i class="fas fa-thumbs-up"></i> REVIEW
				</button>
				{/* <!-- REMOVE --> */}
				<button onClick={() => this.setState({view: "remove"})}>
					<i class="fas fa-star"></i>REMOVE
				</button>
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
        {this.state.view === "details" ? <Details movie={this.state.content} hide={this.hideExpandedView}/> : null}
        {this.state.view === "watch" ? <Watch movie={this.state.content} hide={this.hideExpandedView}/> : null}
        {this.state.view === "review" ? <Review movie={this.state.content} hide={this.hideExpandedView}/> : null}
        {this.state.view === "remove" ? <Remove movie={this.state.content} hide={this.hideExpandedView}/> : null}
	</div>
// </div>
        )
    }
}

export default MovieCard;