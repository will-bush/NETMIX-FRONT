import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <ul>
                    <li><a href="" onClick={() => this.props.setPage("search")}>SEARCH</a></li>
                    <li><a href="" onClick={() => this.props.setPage("lists")}>LISTS</a></li>
                    <li><a href="" onClick={() => this.props.setPage("feed")}>FEED</a></li>
                    <li><a href="" onClick={() => this.props.setPage("following")}>FOLLOWING</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;