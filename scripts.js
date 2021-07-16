let api_key = 'BQA9iyhby94YEJfaMLTXvIEH6e_kAOCvEvvZyk2Jwgltak68MD0HWP-2wfqXDcQEYAmsEgpGqRiHjiYsApszfN-JQUWEdzkJb-QrAJXQy7IiJWS7BIyNFK-rSmOF5dEKrcOtqwtqFpDWtcUuRbaZ1pn2eFTJjugwUuBiOdcb9mHJXiwc91RRrY6PwTCwbhfKViA-FSn2wCVS8eOcQ0ZDNkb2BAyPUonnm-S8eHA0H_ARLqkqKBzTP0WIFTITGgdbDzkTi1WI6s2Y3TyPBLbIqzNMurirYsv43LT5TvvJRw-I'


load_spotify();

var prevScrollpos = window.pageYOffset;

let upordown = "down";


window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }

    prevScrollpos = currentScrollPos;

}


function load_spotify(){
    let album_url = null;
    let song_name = null;
    let album_name = null;
    let artist_name = null;
    fetch('https://api.spotify.com/v1/me/player/currently-playing' , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
        } 
    })
    .then(response => response.json())
    .then(data => {
        album_url = data.item.album.images[0].url;
        song_name = data.item.name;
        album_name = data.item.album.name;
        artist_name = data.item.artists[0].name;
        album_url = data.item.album.images[0].url;
        document.getElementById("album-image").innerHTML = "<img class = 'album-image-real' src='" + album_url + "'></img>"
        song_name = data.item.name;
        document.getElementById("song-name").innerText = song_name;
        album_name = data.item.album.name;
        document.getElementById("album-name").innerText = album_name;
        artist_name = data.item.artists[0].name
        document.getElementById("artist-name").innerText = artist_name; 
    });
    fetch('https://api.spotify.com/v1/me/top/artists?limit=1' , {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
        } 
    })
    .then(response => response.json())
    .then(data => {
        let finalhtml = "";
        finalhtml = "<a class = 'artist-link' href='" + data.items[0].external_urls.spotify + "' target = '_blank'><div class = 'artist-overall'><img class = 'artist-image' src = '" + data.items[i].images[0].url + "'</img><h1 class = 'artist-name'>" + data.items[i].name + "</h1></div></a>";
        document.getElementById("artist-grid").innerHTML = finalhtml;
    })
}