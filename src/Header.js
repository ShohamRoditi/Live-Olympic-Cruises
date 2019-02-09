import React , {Component} from "react";
import {NavLink} from "react-router-dom";

// const path = window.location.pathname;

class Header extends Component {
    active={
        backgroundColor:"#212F3D",
        color:"white",
        fontWeight:"bold"
    };

    header = {
        lifeStyle: "none",
        display:"flex",
        justifyContent: "space-evenly"
    };

    render(){
        return(
            <div style ={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                get All Cruises's Competitors
                </NavLink>
                <NavLink  to="/getCruiseByYearCompetitor" activeStyle={this.active}>
                Search Cruises's Competitions By Year And Name 
                </NavLink>

            </div>
        );
    }
}


export default Header;