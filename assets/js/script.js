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

// var YOUTUBE_API_KEY = "AIzaSyALXCnZWCKsJanquAd1DD_9WLfw--Ziwfc"
// creates script element and cites the source and grabs new script tag
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// replaces the html element with player for youtube and shows the playlist
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      playerVars: {
        color: 'red',
        playlist: 'IVAJrYOOtwI,DBoqrSn1GR8,S7ANzMWd4xI,00EvO-X6Wu4,qiHXxrCB5yk,y84OYRwzZU8,WMo_gCRMSfA,nVReBH3QYD0,1CZDGFFHnI4,Ch5vWBPCrl0,P_qzyTFSrTE,4FX_2UevHbE,EHJGJL40cQs,9mvTgXPHlvo,U1Gs8WTddI4,tV7X76FKkeI,Ape4gtRZIys,AGTkGFQg3Rw,ANdG2DGm0CQ'
    },
    });
  }

