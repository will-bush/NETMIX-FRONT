import React from 'react';
// import API from '../API';
import './ResultCard.css';
import Details from './Details';
import Watch from './Watch';
import Add from './Add'
// import Review from './Review';
// import Remove from './Remove'

class ResultCard extends React.Component {

    state = {
        view: ""
    }

    hideExpandedView = () => {
        this.setState({
            view: ""
        })
	}
	
	componentDidMount() {
		// this.props.refreshLists()
	}

    render() {

        return (
    <div class="wrapper">
	<div class="main_card">
		<div class="card_left">
			<div class="card_datails">
				<h1>{this.props.movie.Title}</h1>
				<div class="card_cat">
					<p class="rating">{this.props.movie.Rated}</p>
					<p class="year">{this.props.movie.Year}</p>
					<p class="genre">{this.props.movie.Genre}</p>
					<p class="time">{this.props.movie.Runtime}</p>
				</div>
				<p class="disc">{this.props.movie.Plot}</p>
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
				{/* <!--ADD TO LIST --> */}
				<button onClick={() => this.setState({view: "add"})}>
					<i class="fas fa-thumbs-up"></i> ADD TO LIST
				</button>
				{/* <!-- REMOVE --> */}
				{/* <button onClick={() => this.setState({view: "remove"})}>
					<i class="fas fa-star"></i>REMOVE
				</button> */}
			</div>	
			</div>
		</div>
		<div class="card_right">
			<div class="img_container">
				{/* <img src={"http://img.omdbapi.com/?apikey=a12b58ca&i=" + this.props.movie.imdbID} alt=""/> */}
                <img src={this.props.movie.Poster} alt={"Poster for " + this.props.movie.Title}/>
				</div>
				<div class="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank" rel="noopener noreferrer">
						<i class="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
        {this.state.view === "details" ? <Details movie={this.props.movie} hide={this.hideExpandedView}/> : null}
        {this.state.view === "watch" ? <Watch movie={this.props.movie} hide={this.hideExpandedView}/> : null}
        {this.state.view === "add" ? <Add movie={this.props.movie} hide={this.hideExpandedView} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.props.resetSearch}/> : null}
	</div>
// </div>
        )
    }
}

export default ResultCard;