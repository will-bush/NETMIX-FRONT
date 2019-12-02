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
         this.printSources()
     }

    printSources = () => {
        console.log("printing the sources")
        let streamable = this.state.refinedSources.filter(source => source.url !== null)
        console.log(streamable)
        this.setState({
            streams: streamable
        })
    }

    render() {

        return (
            <div className="watch">
                <div class="watch_content">
                    <h1>Watch component</h1>
                    <Button variant='contained' color='secondary' onClick={() => this.getSources(this.props.movie.Title)}>GET SOURCES</Button>
                     {/* {this.state.refinedSources.length > 0 ? <p>THIS IS HOW WE MAP!</p> : null} */}
                    {/* {this.state.streams.length > 0 ? this.state.streams.map(stream => <p>{stream.display_name}</p>) : null} */}
                    <div className="SourceRow">
                    {this.state.streams.length > 0 ? <p>You can currently watch {this.props.movie.Title} on the following sites:</p> : null}
                    {this.state.streams.length > 0 ? this.state.streams.map(stream => <div className="sourceColumn"><a href={stream.url} target="_blank" rel="noopener noreferrer"><img className="sourceIcon" src={stream.icon} alt={stream.name}/></a></div>) : null}
                    </div>
                    <Button className="hide_details" variant='contained' color='primary' onClick={this.props.hide}>HIDE</Button>
                </div>
            </div>
        )
    }
}

export default Watch;