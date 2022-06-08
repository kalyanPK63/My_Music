import axios from "axios";
import React, { useEffect, useState } from "react";

function ArtistDropdown2() {
    const [users, setUsers] = useState([]);
    const [singleUser, setsingleUser] = useState([]);
    
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

    return (

        <select className="form-control col-md-3" onChange={onddlChange}>
            <option value="0">--Select Artist--</option>
            {users.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>

    );
}

export default ArtistDropdown2
{/* <select className="form-control col-md-3" onChange={onddlChange}>
            <option value="0">--Select Artist--</option>
            {users.map((user) => {
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            })}
        </select>*/}