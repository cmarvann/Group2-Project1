var dndUrl="https://www.dnd5eapi.co/api/skills/";

document.getElementById('nature').addEventListener('click', function(){

    fetch(dndUrl + "nature")
         .then(response => response.json())
         .then(json => {
            var desc = {
                desc: Array(1)
               }
              console.log(json.desc);
         });
});

document.getElementById('acrobatics').addEventListener('click', function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
              var desc = {
               desc: Array(1)
              } 
              console.log(json.desc);
         });
});