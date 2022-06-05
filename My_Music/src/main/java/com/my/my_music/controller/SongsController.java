package com.my.my_music.controller;

import com.my.my_music.model.Artists;
import com.my.my_music.model.Songs;
import com.my.my_music.repo.ArtistRepo;
import com.my.my_music.repo.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/songs")
public class SongsController {

    private final SongRepo songRepo;
    private final ArtistRepo artistRepo;

    @Autowired
    public SongsController(SongRepo songRepo, ArtistRepo artistRepo) {
        this.songRepo = songRepo;
        this.artistRepo = artistRepo;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Songs>> getAllSongs() {
        return ResponseEntity.ok(songRepo.findAll());
    }

    @PostMapping("/add")
    public ResponseEntity<?> addSongs(@RequestBody Songs song){
        if (songRepo.existsSongsBySongNameEquals(song.getSongName()))
            return ResponseEntity.badRequest().body("Song already exists");
        else{
            Artists a = song.getArtists();
            if (artistRepo.existsArtistsByNameEquals(a.getName()))
                ResponseEntity.status(HttpStatus.ALREADY_REPORTED);
            else
                artistRepo.insert(a);
            Songs s = songRepo.insert(song);
            return new ResponseEntity<>(s, HttpStatus.CREATED);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getSong(@PathVariable String id){
        Optional<Songs> song = songRepo.findById(id);

        if (song.isPresent())
            return ResponseEntity.ok(song.get());
        else
            return ResponseEntity.noContent().build();
    }

    @GetMapping("/getByN/{songName}")
    public ResponseEntity<?> getSongByN(@PathVariable String songName){
        Optional<Songs> song = songRepo.findSongsBySongName(songName);

        if (song.isPresent())
            return ResponseEntity.ok(song.get());
        else
            return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable String id){
        if (songRepo.existsById(id)){
            songRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        else return ResponseEntity.notFound().build();
    }

    @PostMapping("/add/artist")
    public ResponseEntity<?> addArtist(@RequestBody Artists artist){
        if (artistRepo.existsArtistsByNameEquals(artist.getName()))
            return new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);
        else {
            Artists a = artistRepo.insert(artist);
            return new ResponseEntity<>(a, HttpStatus.CREATED);
        }
    }

}
