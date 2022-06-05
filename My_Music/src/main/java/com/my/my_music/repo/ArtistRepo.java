package com.my.my_music.repo;

import com.my.my_music.model.Artists;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtistRepo extends MongoRepository<Artists, String> {

    boolean existsArtistsByNameEquals(String name);

    Artists findArtistsByName(String name);
}
