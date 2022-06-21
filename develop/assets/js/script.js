var skill = "";
var skillClicked = "";
var skillClose = "";
var reset = "";

var dndUrl="https://www.dnd5eapi.co/api/skills/";

document.getElementById('nature').addEventListener('click', function(){

    fetch(dndUrl + "nature")
         .then(response => response.json())
         .then(json => {
              console.log(json);
         });
});

document.getElementById('acrobatics').addEventListener('click', function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
              console.log(json);
         });
});