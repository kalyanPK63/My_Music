import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../styles/Top10Songs.css'
import * as ReactBootStrap from 'react-bootstrap'

const Top10Songs = () => {

    const [posts, setPosts] = useState({ songs: [] })

    /*const [na, setNa] = useState({artists: []}) */

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("http://localhost:8080/songs/get10")

            setPosts({ songs: data })
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])

    /*useEffect(() => {
        const fetchPostList = async () => {
            const {info} = await axios("")
        }
    })*/

    return (
        <div className='container'>
            <h2>Top 10 Songs</h2>
            <ReactBootStrap.Table >

                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Song</th>
                        <th>Avg Rating</th>
                        <th>Date of Release</th>
                        <th>Artists</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.songs && posts.songs.map(song => (
                            <tr>
                                <td> <img className='coverImage' src={song.cover}/></td>
                                <td>{song.songName}</td>
                                <td>{song.avgRating}</td>
                                <td>{song.dateOfRelease}</td>
                                <td>{song.artists.map(artist => (
                                    <div>{artist.name}</div> 
                                ))}</td>
                                <td>{song.artists.name}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </ReactBootStrap.Table>
        </div>
    )
}

export default Top10Songs