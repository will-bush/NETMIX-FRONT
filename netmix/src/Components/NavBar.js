import React from 'react';
import './NavBar.css';
import logo from '../netmix.png'

class NavBar extends React.Component {

    render() {

        return (
            <div className="bar">
                <ul className="navbar">
                    <li><img className="navLogo" src={logo} alt='logo' onClick={() => this.props.setPage("")}/></li>
                        <a href="#search"><li><p>Search</p></li></a>
                    <li><p onClick={() => this.props.setPage("lists")}>My Lists</p></li>
                        <a href="#yourlists"><li><p>Create New List</p></li></a>
                    <li><p onClick={() => this.props.setPage("feed")}>Get Inspired</p></li>
                    <li><p onClick={() => this.props.setPage("connect")}>Connect</p></li>
                    <li><p onClick={() => this.props.setPage("following")}>Following</p></li>
                    <li className="signout" ><p onClick={() => this.props.signOut()}>Sign Out</p></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;