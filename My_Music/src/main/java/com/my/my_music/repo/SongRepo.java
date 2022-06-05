package com.my.my_music.repo;

import com.my.my_music.model.Songs;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepo extends MongoRepository<Songs, String> {

    public Songs findSongsBySongName(String songName);

    boolean existsSongsBySongNameEquals(String songName);

}
