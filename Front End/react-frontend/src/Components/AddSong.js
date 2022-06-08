import React, { Component } from "react";
import SongsService from "../services/SongsService";

class AddSong extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            songName:'',
            dateOfRelease:'',
            artists:'',
            avgRating:'',
            cover:''
        }
        this.changeSongNameHandler = this.changeSongNameHandler.bind(this);
        this.changeDateOfReleaseHandler = this.changeDateOfReleaseHandler.bind(this);
        this.changeArtistsHandler = this.changeArtistsHandler.bind(this);
        this.changeAvgRatingHandler = this.changeAvgRatingHandler.bind(this);
        this.changeCoverHandler = this.changeCoverHandler.bind(this);
        this.saveSong = this.saveSong.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            SongsService.getSong(this.state.id).then((res) =>{
                let song = res.data;
                this.setState({songName: song.songName,
                    dateOfRelease: song.dateOfRelease,
                    artists: song.artists,
                    avgRating: song.avgRating,
                    cover: song.cover
                });
            });
        }
    }

    saveSong = (s) => {
        s.preventDefault();
        let song = {
            songName: song.songName,
            dateOfRelease: song.dateOfRelease,
            artists: song.artists,
            avgRating: song.avgRating,
            cover: song.cover
        };
        console.log('song => ' + JSON.stringify(song));

        if(this.state.id ==='_add'){
            SongsService.addSongs(song).then(res => {
                this.props.history.push('/songs');
            });
        }
    }

    changeArtistsHandler = (event) => {
        this.setState({artists: event.target});
    }

    changeAvgRatingHandler = (event) => {
        this.setState({avgRating: event.target});
    }

    changeCoverHandler = (event) => {
        this.setState({cover: event.target});
    }

    changeDateOfReleaseHandler = (event) => {
        this.setState({dateOfRelease: event.target});
    }

    changeSongNameHandler = (event) => {
        this.setState({songName: event.target});
    }

    cancle() {
        this.props.history.push('/songs');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Song</h3>
        }
    }

    render(){

        return(
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-body">
                                    <label> Song Name: </label>
                                    <input placeholder="Song Name" name="songName" className="form-control" 
                                    value={this.state.songName} onChange={this.changeSongNameHandler}/>
                                </div>
                                <div className="form-body">
                                    <label> Date of Release: </label>
                                    <input placeholder="Date of Release" name="dateOfRelease" className="form-control" 
                                    value={this.state.dateOfRelease} onChange={this.changeDateOfReleaseHandler}/>
                                </div>
                                <div className="form-body">
                                    <label> Artists </label>
                                    <input placeholder="Artists" name="artists" className="form-control" 
                                    value={this.state.artists} onChange={this.changeArtistsHandler}/>
                                </div>
                                <div className="form-body">
                                    <label> Average Rating </label>
                                    <input placeholder="Average Rating" name="avgRating" className="form-control" 
                                    value={this.state.avgRating} onChange={this.changeAvgRatingHandler}/>
                                </div>
                                <div className="form-body">
                                    <label> Cover </label>
                                    <input placeholder="Cover Image url" name="cover" className="form-control" 
                                    value={this.state.cover} onChange={this.changeCoverHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveSong}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        )
    }
}

export default AddSong;