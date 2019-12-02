import React from 'react';
import './NavBar.css';
import logo from '../netmix.png'

class NavBar extends React.Component {

    render() {

        return (
            <div className="bar">
                <ul className="navbar">
                <li><img className="navLogo" src={logo} alt='logo' onClick={() => this.props.setPage("")}/></li>
                    {/* <li><p onClick={() => this.props.setPage("")}>HOME</p></li> */}
                    <li><p onClick={() => this.props.setPage("lists")}>My List</p></li>
                    <li><p onClick={() => this.props.setPage("feed")}>Recently Added</p></li>
                    <li><p onClick={() => this.props.setPage("connect")}>Connect</p></li>
                    <li className="signout" ><p onClick={() => this.props.signOut()}>Sign Out</p></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;