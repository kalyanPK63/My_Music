import React, { useState, useEffect } from "react";
import Axios from 'axios';
import ArtistDropdown from "./ArtistsDropdown";
import ArtistDropdown2 from "./ArtistDropdown2";
import axios from "axios";
import CustomizedDialogs from "./DialogBox";
import AddArtist from "./AddArtist";

function AddSong() {

    const url = "http://localhost:8080/songs/add"

    const [data, setData] = useState({
        songName: "",
        dateOfRelease: "",
        artists: "",
        avgRating: "",
        cover: ""
    })

    const [users, setUsers] = useState([]);
    const [singleUser, setsingleUser] = useState({
        name: "",
        dateOfBirth:"",
        bio:""
    });

    useEffect(
        function () {
            axios.get("http://localhost:8080/songs/getall/Artists")
                .then((response) => setUsers(response.data))
                .then((error) => console.log(error));
        }, []);
    const onddlChange = (e) => {
        //alert(e.target.value);
        axios.get("http://localhost:8080/songs/getall/Artists/" + e.target.value)
            .then((response) => setsingleUser(response.data))
            .then((error) => console.log(error));
    };

    const changeHandle = (event) => {
        const {name, value} = event.target;
        setData(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleSub = (event) => {
        event.preventDefault();

        const song = {
            songName: data.songName,
            dateOfRelease: data.dateOfRelease,
            artists: [singleUser.name, singleUser.dateOfBirth, singleUser.bio],
            avgRating: data.avgRating,
            cover: data.cover
        }

        axios.post('http://localhost:8080/songs/add', song)
    }
    /*function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }*/

    /*function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            songName: data.songName,
            dateOfRelease: data.dateOfRelease,
            artists: [singleUser.name, singleUser.dateOfBirth, singleUser.bio],
            avgRating: data.avgRating,
            cover: data.cover
        })
            .then(res => {
                console.log(res.data)
            })
    }*/
    

    return (
        <div className="container">

            <form onSubmit={handleSub}>
                <div className="form-body">
                    <label> Song Name: </label>
                    <input onChange={changeHandle} id='songName' placeholder="Song Name" name="songName" className="form-control" type='text'
                        value={data.songName} />
                </div>
                <div className="form-body">
                    <label> Date of Release: </label>
                    <input onChange={changeHandle} id='dateOfRelease' placeholder="Date of Release" name="dateOfRelease" className="form-control" type='date'
                        value={data.dateOfRelease} />
                </div>
                <div className="form-body">
                    <label> Artists </label>
                    {/*<select className="form-control col-md-3" onChange={onddlChange} value={data.artists} name="artists">
                        <option value="0">--Select Artist--</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                        </select>*/}
                    <ArtistDropdown2/>
                    <div className="cusd" style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <CustomizedDialogs>
                            <AddArtist />
                        </CustomizedDialogs>
                    </div>
                    

                </div>
                <div className="form-body">
                    <label> Average Rating </label>
                    <input onChange={changeHandle} id='avgRating' placeholder="Average Rating" name="avgRating" className="form-control" type='number'
                        value={data.avgRating} />
                </div>
                <div className="form-body">
                    <label> Cover </label>
                    <input onChange={changeHandle} id='cover' placeholder="Cover Image url" name="cover" className="form-control" type='text'
                        value={data.cover} />
                </div>

                <button className="btn btn-success" style={{ margin: "10px" }}>Submit</button>
                <button className="btn btn-danger" style={{ margin: "10px" }} onClick={() => { window.location.replace('/')}}>Cancel</button>
                
            </form>

            <p style={{ color:"red" }}>
                * Note : If new Artist, Please add Artist before filling song details.
            </p>

        </div>
    )
}

export default AddSong