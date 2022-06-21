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
var clientId = "327243910715-34fu59dnj8mm575ou88kbd7rlbjj9gje.apps.googleusercontent.com";
var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
var scopes = "https://www.googleapis.com/auth/youtube.readonly";

var apiKey = "AIzaSyALXCnZWCKsJanquAd1DD_9WLfw--Ziwfc";
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
      videoId: '00EvO-X6Wu4&list=PLDnRMnDDjAzK5uZLidDUtHtD1iN06Qe0G'
    });
  }

