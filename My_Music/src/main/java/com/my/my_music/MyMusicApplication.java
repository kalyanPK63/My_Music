package com.my.my_music;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class MyMusicApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyMusicApplication.class, args);
    }

}
