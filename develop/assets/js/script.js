var dndUrl="https://www.dnd5eapi.co/api/skills/";

document.getElementById('nature').addEventListener('click', function(){

    fetch(dndUrl + "nature")
         .then(response => response.json())
         .then(json => {
              console.log(json.desc[0]);
         });
});

document.getElementById('acrobatics').addEventListener('click', function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
              console.log(json.desc[0]);
         });
});