import axios from 'axios';

const SONGS_API_BASE_URL = "http://localhost:8080/songs";

class SongsService {

    getAllSongs(){
        return axios.get(SONGS_API_BASE_URL + '/all');
    }

    addSongs(song){
        return axios.post(SONGS_API_BASE_URL + '/add', song);
    }

    getSong(id){
        return axios.get(SONGS_API_BASE_URL + '/get/' + id);
    }

    getSongByN(songName){
        return axios.get(SONGS_API_BASE_URL + '/getByN/' + songName);
    }

    deleteSong(id){
        return axios.delete(SONGS_API_BASE_URL + '/del/' + id);
    }

    addArtist(artist){
        return axios.post(SONGS_API_BASE_URL + '/add/artist', artist);
    }

    getSongsByArtistName(name){
        return axios.get(SONGS_API_BASE_URL + '/getByA/' + name);
    }

}

export default new SongsService()