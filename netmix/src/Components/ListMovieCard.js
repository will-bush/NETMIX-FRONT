import React from 'react';
import API from '../API';
import './MovieCard.css';
import Details from './Details';
import Watch from './Watch';
import Review from './Review';
import poster from '../poster.png';
import AddExisting from './AddExisting'

class ListMovieCard extends React.Component {

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
    <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{this.state.content.Title}</h1>
				<div className="card_cat">
					<p className="rating">{this.state.content.Rated}</p>
					<p className="year">{this.state.content.Year}</p>
					<p className="genre">{this.state.content.Genre}</p>
					<p className="time">{this.state.content.Runtime}</p>
				</div>
				<p className="disc">{this.state.content.Plot}</p>
			<div className="social-btn">
        		{/* <!-- SHOW INFO --> */}
				<button onClick={() => this.setState({view: "details"})}>
                MORE INFO
				</button>
				{/* <!-- GET SOURCES--> */}
				<button onClick={() => this.setState({view: "watch"})}>
					WATCH
				</button >
				{/* <!--CREATE REVIEW --> */}
				<button onClick={() => this.setState({view: "review"})}>
					REVIEW
				</button>
				{/* <!--ADD TO LIST --> */}
				<button onClick={() => this.setState({view: "add"})}>
					ADD TO LIST
				</button>
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
			{this.state.content.Poster === "N/A" ? <img src={poster} alt={"Poster for " + this.state.content.Title}/>
                 : <img src={this.state.content.Poster} alt={"Poster for " + this.state.content.Title}/>}
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank" rel="noopener noreferrer">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
        {this.state.view === "details" ? <Details movie={this.state.content} hide={this.hideExpandedView}/> : null}
        {this.state.view === "watch" ? <Watch movie={this.state.content} hide={this.hideExpandedView}/> : null}
        {this.state.view === "review" ? <Review movie={this.state.content} hide={this.hideExpandedView} listing_data={this.props.listing_data}/> : null}
		{this.state.view === "add" ? <AddExisting movie={this.state.content} hide={this.hideExpandedView} lists={this.props.lists} refreshLists={this.props.refreshLists} resetSearch={this.props.resetSearch}/> : null}
	</div>
        )
    }
}

export default ListMovieCard;