package com.my.my_music;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableMongoRepositories
public class MyMusicApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyMusicApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/songs/get10").allowedOrigins("http://localhost:8080/");
                registry.addMapping("/songs/**").allowedOrigins("http://localhost:3000");
                registry.addMapping("/songs/get10").allowedOrigins("http://localhost:3000");
            }
        };
    }

}
