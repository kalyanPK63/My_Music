import React, { Component } from "react";
import '../Styles/Header.css';

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(

            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="#" className="navbar-brand">My Music</a>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}

export default Header;