import React from 'react';

class WatchLink extends React.Component {

    render() {

        return (
            <div>
                <h1>{this.props.source.display_name}</h1>
            </div>
        )
    }
}

export default WatchLink;