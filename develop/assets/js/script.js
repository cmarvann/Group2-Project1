var skill = "";
var skillClicked = "";
var skillClose = "";
var reset = "";





var dndUrl = "https://www.dnd5eapi.co/api/skills/";

var skillEl = document.querySelector(".add-skills");



document.getElementById('nature').addEventListener('click', function(){

    fetch(dndUrl + "nature")
         .then(response => response.json())
         .then(json => {
          var addSkillel = document.createElement("li");
          addSkillel.textContent = (json.desc[0]);
          skillEl.appendChild(addSkillel);
         });
});

document.getElementById('acrobatics').addEventListener('click', function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
          var addSkillel = document.createElement("li");
          addSkillel.textContent = (json.desc[0]);
          skillEl.appendChild(addSkillel);
         });
});

document.getElementById('animal-handling').addEventListener('click', function(){

     fetch(dndUrl + "animal-handling")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 

 document.getElementById('arcana').addEventListener('click', function(){

     fetch(dndUrl + "arcana")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('athletics').addEventListener('click', function(){

     fetch(dndUrl + "athletics")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
              addSkillel.textContent = (json.desc[0]);
              skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('deception').addEventListener('click', function(){

     fetch(dndUrl + "deception")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 
 document.getElementById('history').addEventListener('click', function(){

     fetch(dndUrl + "history")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('insight').addEventListener('click', function(){

     fetch(dndUrl + "insight")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('intimidation').addEventListener('click', function(){

     fetch(dndUrl + "intimidation")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 
 document.getElementById('investigation').addEventListener('click', function(){

     fetch(dndUrl + "investigation")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 
 document.getElementById('medicine').addEventListener('click', function(){

     fetch(dndUrl + "medicine")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('perception').addEventListener('click', function(){

     fetch(dndUrl + "perception")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 
 document.getElementById('performance').addEventListener('click', function(){

     fetch(dndUrl + "performance")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 

 document.getElementById('persuasion').addEventListener('click', function(){

     fetch(dndUrl + "persuasion")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 
 document.getElementById('religion').addEventListener('click', function(){

     fetch(dndUrl + "religion")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 
 document.getElementById('sleight-of-hand').addEventListener('click', function(){

     fetch(dndUrl + "sleight-of-hand")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });

 document.getElementById('stealth').addEventListener('click', function(){

     fetch(dndUrl + "stealth")
          .then(response => response.json())
          .then(json => {
               var addSkillel = document.createElement("li");
               addSkillel.textContent = (json.desc[0]);
               skillEl.appendChild(addSkillel);
          });
 });
 
 document.getElementById('survival').addEventListener('click', function(){

     fetch(dndUrl + "survival")
          .then(response => response.json())
          .then(json => {
               
          
              var addSkillel = document.createElement("li");
              addSkillel.textContent = (json.desc[0]);
              skillEl.appendChild(addSkillel);



               
          });

          


   });

   
 
 
 

 

 


    
 


 

 
 

















