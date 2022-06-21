// saves the user info to local storage
var user = {}
$(".saveBtn").on("click", function() {
    //setting the local storage for each hour
    var name = document.getElementById("name").value;
    localStorage.setItem("Name", name);

    var race = document.getElementById("race").value;
    localStorage.setItem("Race", race);

    var userClass = document.getElementById("class").value;
    localStorage.setItem("Class", userClass);

    var subclass = document.getElementById("subclass").value;
    localStorage.setItem("Subclass", subclass);
});

// saves the user skills to local storafe
var skills = {};
$(".addBtn").on("click", function() {
    var skill = document.getElementById("skill").value;
    localStorage.setItem("Skills", skill);
});

//options 
var CLIENT_ID = "327243910715-34fu59dnj8mm575ou88kbd7rlbjj9gje.apps.googleusercontent.com";
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

// default yt channel
var defaultChannel = "Jocat";

// load auth library 
function handleClientLoad() {
    GamepadHapticActuator.load("client:auth2", initClient);
}

// init api client library and set up in listeners
function initClient() {
    GamepadHapticActuator.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scopes: SCOPES
    }).then(() => {

    })
}

// var apiKey = "AIzaSyALXCnZWCKsJanquAd1DD_9WLfw--Ziwfc";
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'IVAJrYOOtwI'
    });
  }

