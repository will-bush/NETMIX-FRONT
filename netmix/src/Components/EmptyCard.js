import React from 'react';
import API from '../API';
import './MovieCard.css';
import Details from './Details';
import Watch from './Watch';
import Review from './Review';
import Remove from './Remove';
import poster from '../poster.png';

class EmptyCard extends React.Component {

    // state = {
    //     content: {},
    //     show_detail: false,
    //     view: ""
    // }

    // componentDidMount() {
    //     API.getContent(this.props.listing_data.content_id)
    //     .then( resp => this.setState({
    //         content: resp
    //     }))
    // }

    // hideExpandedView = () => {
    //     this.setState({
    //         view: ""
    //     })
    // }

    render() {

        return (
            // <div>
            //     <img src={this.state.content.Poster}/>
            //     <h3>{this.state.content.Title}</h3>
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
				{/* <a href={"https://www.imdb.com/title/" + this.state.content.imdbID} target="_blank" rel="noopener noreferrer">Read More</a> */}
			<div className="social-btn">
        {/* <!-- SHOW INFO --> */}
				<a href="#search">
				<button>START SEARCHING NOW!
                {/* <i className="fas fa-play"></i>MORE INFO */}
                {/* {this.state.show_detail ? "HIDE INFO" : "MORE INFO"} */}
				</button></a>
				{/* <!-- GET SOURCES--> */}
				{/* <button onClick={() => this.setState({view: "watch"})}> */}
					{/* <i className="fas fa-download"></i> WATCH */}
				{/* </button > */}
				{/* <!--CREATE REVIEW --> */}
				{/* <button onClick={() => this.setState({view: "review"})}> */}
					{/* <i className="fas fa-thumbs-up"></i> REVIEW */}
				{/* </button> */}
				{/* <!-- REMOVE --> */}
				{/* <button onClick={() => this.setState({view: "remove"})}> */}
					{/* <i className="fas fa-star"></i>REMOVE */}
				{/* </button> */}
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
        {/* {this.state.view === "details" ? <Details movie={this.state.content} hide={this.hideExpandedView}/> : null} */}
        {/* {this.state.view === "watch" ? <Watch movie={this.state.content} hide={this.hideExpandedView}/> : null} */}
        {/* {this.state.view === "review" ? <Review movie={this.state.content} hide={this.hideExpandedView} listing_data={this.props.listing_data}/> : null} */}
        {/* {this.state.view === "remove" ? <Remove movie={this.state.content} hide={this.hideExpandedView} listing_data={this.props.listing_data} refreshLists={this.props.refreshLists}/> : null} */}
	</div>
// </div>
        )
    }
}

export default EmptyCard;