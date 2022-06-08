package com.my.my_music.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Document(collection = "Songs")
@Data
public class Songs {

    @Id
    private String id;

    private String songName;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private LocalDate dateOfRelease;
    private double avgRating;
    private List<Artists> artists;
    private String cover;
}
