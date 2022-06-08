import React, { useState } from "react";
import axios from "axios";


function AddArtist() {

    const [art, setArt] = useState({
        name: "",
        dateOfBirth: "",
        bio: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setArt(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const artist = {
            name: art.name,
            dateOfBirth: art.dateOfBirth,
            bio: art.bio
        }
        
        axios.post('http://localhost:8080/songs/add/artist', artist)
    }

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <div className="form-body">
                    <label> Artist Name: </label>
                    <input onChange={handleChange} id='name' placeholder="Artist Name" name="name" className="form-control" type='text'
                        value={art.name} />
                </div>
                <div className="form-body">
                    <label> Date of Birth: </label>
                    <input onChange={handleChange} id='dateOfBirth' placeholder="Date of Birth" name="dateOfBirth" className="form-control" type='date'
                        value={art.dateOfBirth} />
                </div>
                <div className="form-body">
                    <label> Bio: </label>
                    <input onChange={handleChange} id='bio' placeholder="Bio" name="bio" className="form-control" type='text'
                        value={art.bio} />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>

        </div>

    )
}

export default AddArtist