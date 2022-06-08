$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/songs/get10"
    }).then(function(data, status, jqxhr) {
       $('.song-id').append(data.id);
       $('.song-Name').append(data.songName);
       $('.song-releasedate').append(data.dateOfRelease);
       $('.song-artists').append(data.artists);
       $('.song-rating').append(data.avgRating);
       $('.song-cover').append(data.cover);
       console.log(jqxhr);
    });
});