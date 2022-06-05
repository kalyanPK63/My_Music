package com.my.my_music.repo;

import com.my.my_music.model.Artists;
import com.my.my_music.model.Songs;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SongRepo extends MongoRepository<Songs, String> {

    public Optional<Songs> findSongsBySongName(String songName);

    List<Songs> findSongsByArtistsName(String name);

    boolean existsSongsBySongNameEquals(String songName);

}
