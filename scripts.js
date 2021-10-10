let api_key = 'BQA9iyhby94YEJfaMLTXvIEH6e_kAOCvEvvZyk2Jwgltak68MD0HWP-2wfqXDcQEYAmsEgpGqRiHjiYsApszfN-JQUWEdzkJb-QrAJXQy7IiJWS7BIyNFK-rSmOF5dEKrcOtqwtqFpDWtcUuRbaZ1pn2eFTJjugwUuBiOdcb9mHJXiwc91RRrY6PwTCwbhfKViA-FSn2wCVS8eOcQ0ZDNkb2BAyPUonnm-S8eHA0H_ARLqkqKBzTP0WIFTITGgdbDzkTi1WI6s2Y3TyPBLbIqzNMurirYsv43LT5TvvJRw-I'

//load_spotify();

var prevScrollpos = window.pageYOffset;

let upordown = "down";

let project = false;

window.onscroll = function() {
    if(project == false){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
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
}


function return_home(){
    project = false;
    location.replace("/#portfolio");
}


function to_project(name){
    location.replace("/projects.html?project=" + name);
}


function check_url_data(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const project_name = urlParams.get("project");
    project = true;
    if(project_name == "fill-the-gapz"){
        fill_the_gapz();
    }else if (project_name == "apploy"){
        apploy();
    }else if(project_name == "fitch-network"){
        fitch_network();
    }else{
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.overflowY = "visible"
    }
}

function fill_the_gapz(){
    document.getElementById("mockup").innerHTML = '<img class = "project-mockup" src = "imgs/fillthegapz-mockup.png">';
    document.getElementById("project-title").innerText = "Fill The Gapz";
    document.getElementById("dates").innerText = "March 2021 - Present";
    document.getElementById("status").innerHTML = '<h1 class = "working">In Development</h1>'
    document.getElementById("languages").innerHTML = '<h1>JavaScript</h1> <h1>HTML</h1>  <h1>Firebase</h1>  <h1>CSS</h1>'
    document.getElementById("project-description").innerText = "An online, multiplayer and responsive Cards against Humanity clone with custom cards and images."
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflowY = "visible"
}

function apploy(){
    document.getElementById("mockup").innerHTML = '<img class = "project-mockup" src = "imgs/apploy-mockup.png">';
    document.getElementById("project-title").innerText = "Apploy";
    document.getElementById("dates").innerText = "Oct 2021 - Present";
    document.getElementById("status").innerHTML = '<h1 class = "working">In Development</h1>'
    document.getElementById("languages").innerHTML = '<h1>JavaScript</h1> <h1>HTML</h1>  <h1>Firebase</h1>  <h1>SCSS</h1>'
    document.getElementById("project-description").innerText = "An online database of freelance software engineers available to hire - A place to display your work and get jobs."
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflowY = "visible"
}

function fitch_network(){
    document.getElementById("mockup").innerHTML = '<img class = "project-mockup" src = "imgs/FN-mockup.png">';
    document.getElementById("project-title").innerText = "Fitch Network";
    document.getElementById("dates").innerText = "Oct 2019 - Dec 2019";
    document.getElementById("status").innerHTML = '<h1 class = "complete">Complete</h1>'
    document.getElementById("languages").innerHTML = '<h1>JavaScript</h1> <h1>HTML</h1>  <h1>3rd Party</h1>  <h1>CSS</h1>'
    document.getElementById("project-description").innerText = "Online portal to access the services provided such as Plex and Movie requests."
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflowY = "visible"
}

