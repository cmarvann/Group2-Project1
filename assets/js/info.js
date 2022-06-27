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