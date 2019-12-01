import React from 'react';
import './NavBar.css';
import logo from '../netmix_logo.png'

class NavBar extends React.Component {

    render() {

        return (
            <div className="bar">
                <ul className="navbar">
                <li><img className="navLogo" src={logo} alt='logo' onClick={() => this.props.setPage("")}/></li>
                    {/* <li><p onClick={() => this.props.setPage("")}>HOME</p></li> */}
                    <li><p onClick={() => this.props.setPage("lists")}>MY LISTS</p></li>
                    <li><p onClick={() => this.props.setPage("feed")}>RECENTLY ADDED</p></li>
                    <li><p onClick={() => this.props.setPage("following")}>FOLLOWING</p></li>
                    <li className="signout" ><p onClick={() => this.props.signOut()}>SIGN OUT</p></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;