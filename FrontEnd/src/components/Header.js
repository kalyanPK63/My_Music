import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.css'

const Header = () => {

    let navigate = useNavigate();

    return (

        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a onClick={() => { navigate('/')}} href="" className="navbar-brand" >My Music</a>
                    </div>
                    <div>
                        <button type="button" className="addSongB" onClick={() => {
                            navigate("/addSong")
                        }}>
                            Add Song
                        </button>
                    </div>
                </nav>
            </header>
        </div>

    )

}

export default Header;