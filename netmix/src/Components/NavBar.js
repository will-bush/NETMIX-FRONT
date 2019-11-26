import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <ul className="navbar">
                    <li><p onClick={() => this.props.setPage("")}>HOME</p></li>
                    <li><p onClick={() => this.props.setPage("search")}>SEARCH</p></li>
                    <li><p onClick={() => this.props.setPage("lists")}>LISTS</p></li>
                    <li><p onClick={() => this.props.setPage("feed")}>FEED</p></li>
                    <li><p onClick={() => this.props.setPage("following")}>FOLLOWING</p></li>
                    <li className="signout" ><p onClick={() => this.props.signOut()}>SIGN OUT</p></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;