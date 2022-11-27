let api_key = 'BQA9iyhby94YEJfaMLTXvIEH6e_kAOCvEvvZyk2Jwgltak68MD0HWP-2wfqXDcQEYAmsEgpGqRiHjiYsApszfN-JQUWEdzkJb-QrAJXQy7IiJWS7BIyNFK-rSmOF5dEKrcOtqwtqFpDWtcUuRbaZ1pn2eFTJjugwUuBiOdcb9mHJXiwc91RRrY6PwTCwbhfKViA-FSn2wCVS8eOcQ0ZDNkb2BAyPUonnm-S8eHA0H_ARLqkqKBzTP0WIFTITGgdbDzkTi1WI6s2Y3TyPBLbIqzNMurirYsv43LT5TvvJRw-I'

//load_spotify();

var prevScrollpos = window.pageYOffset;

let upordown = "down";

let project = false;

let git_name = null;

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
        git_name = "fill-the-gapz";
        fill_the_gapz();
    }else if (project_name == "apploy"){
        git_name = "apploy";
        apploy();
    }else if(project_name == "fitch-network"){
        git_name = "fitch-network";
        fitch_network();
    }else{
        git_name = "pc-assembler";
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.overflowY = "visible"
    }
}

function github(){
    if(git_name == "fill-the-gapz"){
        window.open('https://github.com/AlfieFitch/FillTheGapz', '_blank').focus()
    }else if(git_name == "apploy"){
        window.open('https://github.com/AlfieFitch/Apploy', '_blank').focus()
    }else if(git_name == "fitch-network"){
        window.open('https://github.com/AlfieFitch/Fitch-Network', '_blank').focus()
    }else{
        window.open('https://github.com/AlfieFitch/PC-Assembler', '_blank').focus()
    }
}

function fill_the_gapz(){
    document.getElementById("mockup").innerHTML = '<img class = "project-mockup" src = "imgs/fillthegapz-mockup.png">';
    document.getElementById("project-title").innerText = "Fill The Gapz";
    document.getElementById("dates").innerText = "March 2021 - Present";
    document.getElementById("status").innerHTML = '<h1 class = "working">In Development</h1>'
    document.getElementById("languages").innerHTML = '<h1>JavaScript</h1> <h1>HTML</h1>  <h1>Firebase</h1>  <h1>CSS</h1>'
    document.getElementById("project-description").innerText = "An online, multiplayer and responsive Cards against Humanity clone with custom cards and images."
    document.getElementById("paragraph-1").innerHTML = '<h1>Fill The Gapz was the first large, personal project taken on by me. It involved many learning curves, such as best backend practices as well as using Firebase. Fill The Gapz is a free, online, multiplayer version of the popular cards against humanity card game. The website uses a 3rd party custom card service, linked through the API to allow for custom card content. The project began during Lockdown in March 2021, and was paused as I had to shift my focus on the upcoming A Level exams. <br><br> Fill the Gapz is coded using vanilla JavaScript, HTML and CSS. This helped me get a firm grasp on JavaScript and the best practices before branching out into frameworks such as React or Angular. Fill the Gapz uses Vercel for hosting, Vercel is easy to use and automatically updates the website when new code is pushed to the github repository. It also uses Firebase as the backend. Analytics is provided by Firebase, as well as the real time database which allows updates to be sent to the other users depending on actions made by the user.<br><br>Fill the Gapz is available to view <a class = "link" target="_blank" href="https://fillthegapz.com">here</a>.</h1>'
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
    document.getElementById("paragraph-1").innerHTML = '<h1>The Fitch Network is the centralised public facing website that allows quick and easy access to the features provided by the Fitch Network if the user has the correct access permissions. Services include Overseer as a request system for movies, as well as, a Plex server to view media and a self hosted status page to show uptime and issues currently on the network. <br><br> The Fitch Network was one of the first websites I ever designed and developed. Some features such as the Live TV is still in development as it is currently not a priority. The Website is hosted using microsoft IIS and has cloudflare as the CDN. The whole Fitch Network is hosted on a local server, built by myself, home to all the required software. Network Changes such as port forwarding are used to allow access wherever the end user is. <br><br> The Fitch Network homepage can be found <a class = "link" target="_blank" href="https://fitchnetwork.co.uk">here</a>.<h1> '
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.overflowY = "visible"
}

