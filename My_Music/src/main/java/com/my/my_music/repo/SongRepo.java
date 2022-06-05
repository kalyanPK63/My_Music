package com.my.my_music.repo;

import com.my.my_music.model.Songs;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SongRepo extends MongoRepository<Songs, String> {

    public Optional<Songs> findSongsBySongName(String songName);

    boolean existsSongsBySongNameEquals(String songName);

}
