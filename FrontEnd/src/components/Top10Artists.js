import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'

const Top10Artists = () => {

    const [posts, setPosts] = useState({ songs: [] })

    const [sets, setSets] = useState({songsbyA: []})

    {/* posts.songs.map(song => (
        song.artists.map(artist => (
            <div>{artist.name}</div>
        ))
        ))*/}

    

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("http://localhost:8080/songs/get10")

            setPosts({ songs: data })
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])
    
    return (

        <div className='container'>

            <h2>Top 10 Artists</h2>

            <ReactBootStrap.Table >

                <thead>
                    <tr>
                        <th>Artists</th>
                        <th>Date of Birth</th>
                        <th>Bio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.songs && posts.songs.map(song => (
                            <tr>
                                <td> {song.artists.map(artist => (
                                    <div>{artist.name}</div>
                                ))} </td>
                                <td>{song.artists.map(artist => (
                                    <div>{artist.dateOfBirth}</div>
                                ))}</td>
                                <td>{song.artists.map(artist => (
                                    <div>{artist.bio}</div>
                                ))}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>

            </ReactBootStrap.Table>

        </div>

    )
}

export default Top10Artists


/*   useEffect(() => {
        const fetchSetList = async () => {
            const { info } = await axios("http://localhost:8080/songs/getByA" +'/' + an)
            setSets({ songsbyA: info })
            console.log(info)
        }
        fetchSetList()
    }, [setSets])
*/