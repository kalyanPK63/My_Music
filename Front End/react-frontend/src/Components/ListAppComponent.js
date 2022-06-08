import React, { Component } from "react";
import '../Styles/ListAppComponent.css';
import SongsService from "../services/SongsService";


class ListAppComponent extends Component{

    constructor (props){
        super(props)

        this.state = {
            songs : []
        }

        this.state = {
            artists : []
        }
        this.addSongs = this.addSongs.bind(this);
        this.addArtist = this.addArtist.bind(this)
    }

    componentDidMount(){
        SongsService.getTop10SongList().then((res) => {
            this.setState({songs : res.data});
        });

        /*SongsService.getSongsByArtistName().then((ted) => {
            this.setState({artists : ted.data});
        });*/
    }

    addSongs(){
        this.props.history.push('/add-song/_add');
    }
    
    render(){
        return(

            <div>
                <h2 className="H2">Top 10 Songs</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSongs}> Add Song</button>
                </div>
                <br></br>

                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Cover</th>
                                <th>Song</th>
                                <th>Date of Release</th>
                                <th>Artists</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.songs.map(
                                    song =>
                                    <tr key = {song.id}>
                                        <td>{song.cover}</td>
                                        <td>{song.songName}</td>
                                        <td>{song.dateOfRelease}</td>
                                        <td>{song.artists}</td>
                                        <td>Rating</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        )
    }

}

export default ListAppComponent;