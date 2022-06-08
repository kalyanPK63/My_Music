package com.my.my_music.controller;

import com.my.my_music.model.Artists;
import com.my.my_music.model.Songs;
import com.my.my_music.repo.ArtistRepo;
import com.my.my_music.repo.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@CrossOrigin(origins ="/http://localhost:8080")
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

    @CrossOrigin(origins ="/http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<?> addSongs(@RequestBody Songs song){
        if (songRepo.existsSongsBySongNameEquals(song.getSongName()))
            return ResponseEntity.badRequest().body("Song already exists");
        else{
            List<Artists> ls = song.getArtists();

            for (Artists a : ls) {
                if (artistRepo.existsArtistsByNameEquals(a.getName()))
                    ResponseEntity.status(HttpStatus.ALREADY_REPORTED);
                else
                    artistRepo.insert(ls);
            }

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

    @CrossOrigin(origins ="/http://localhost:3000")
    @PostMapping("/add/artist")
    public ResponseEntity<?> addArtist(@RequestBody Artists artist){
        if (artistRepo.existsArtistsByNameEquals(artist.getName()))
            return new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);
        else {
            Artists a = artistRepo.insert(artist);
            return new ResponseEntity<>(a, HttpStatus.CREATED);
        }
    }

    @GetMapping("/getByA/{name}")
    public StringBuilder getSongsByArtistName(@PathVariable String name){
        List<Songs> SongsList = songRepo.findSongsByArtistsName(name);
       StringBuilder sb = new StringBuilder();
        for (Songs s : SongsList) {
            String songName = s.getSongName();
            sb.append(songName).append(",");
        }
        return sb;
    }

    @CrossOrigin(origins ="/http://localhost:8080")
    @GetMapping("/get10")
    public Stream<Songs> getTop10Songs(){
        List<Songs> s = songRepo.findAll(Sort.by("avgRating"));
        Collections.reverse(s);
        return s.stream().limit(10);
    }

    @CrossOrigin(origins ="/http://localhost:3000")
    @GetMapping("/getall/Artists")
    public ResponseEntity<List<Artists>> getAllArtists(){
        return ResponseEntity.ok(artistRepo.findAll());
    }

    @CrossOrigin(origins ="/http://localhost:3000")
    @GetMapping("/getall/Artists/{id}")
    public Optional<Artists> getOneArtist(@PathVariable String id){
        return artistRepo.findById(id);
    }

}
