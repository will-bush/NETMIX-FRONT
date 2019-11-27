import React from 'react';
import './Watch.css';
import Button from '@material-ui/core/Button'
// import API from '../API';
// import WatchLink from './WatchLink';


class Watch extends React.Component {

    state = {
        sources: [],
        refinedSources: [],
        streams: []
    }

    getSources = (movieTitle) => {
        fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movieTitle, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "71a90a3dfdmshe9c671ab1abdae6p102fcejsnc16e071b0e3a"
        }
    })
    .then(resp => resp.json())
    .then(sources => this.setState({
        sources: sources.results
    }))
    .then(() => this.refineSources())
    }

    refineSources = () => {
        let refined = this.state.sources.filter( source => source.name === this.props.movie.Title)
         console.log(refined)
         this.setState({
             refinedSources: refined[0].locations
         })
     }

    printSources = () => {
        console.log("printing the sources")
        let streamable = this.state.refinedSources.filter(source => source.url !== null)
        console.log(streamable)
        // this.setState({
        //     streams: streamable
        // })
    }

    render() {

        return (
            <div className="watch">
                <div class="watch_content">
                    <h1>Watch component</h1>
                    <p>You can currently watch {this.props.movie.Title} on the following sites:</p>
                    {/* <Button variant='contained' color='primary' onClick={() => this.getSources(this.props.movie.Title)}>GET SOURCES</Button> */}
                    {/* {this.state.refinedSources.length > 0 ? <p>THIS IS HOW WE MAP!</p> : null}
                     */}
                     {this.state.refinedSources.length > 0 ? this.printSources() : null}
                    {/* <WatchLink /> */}
                    <Button variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
        {/* <iframe src="https://www.imdb.com/videoembed/vi1396095257" allowfullscreen width="854" height="400"></iframe> */}
                </div>
            </div>
        )
    }
}

export default Watch;