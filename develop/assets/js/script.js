var dndUrl="https://www.dnd5eapi.co/api/skills/";
var skillSheet = document.getElementById("add-skills");
var skillArray = [];



document.getElementById('acrobatics').addEventListener('click', function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
          skillArray.push(json.desc[0]);
          if (skillArray.length <= 2){
              var skillUl = document.getElementById("add-skills");
              var addSkillEl = document.createElement("li");
              var skillName = document.createTextNode(json.name);
              var skillText = document.createTextNode(json.desc[0]);
              addSkillEl.appendChild(skillText);
              skillUl.appendChild(addSkillEl);
          }
          else {
               return null;
          }
              
         });
});

document.getElementById('animal-handling').addEventListener('click', function(){

     fetch(dndUrl + "animal-handling")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
               
          });
});

document.getElementById('arcana').addEventListener('click', function(){

     fetch(dndUrl + "arcana")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('athletics').addEventListener('click', function(){

     fetch(dndUrl + "athletics")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('deception').addEventListener('click', function(){

     fetch(dndUrl + "deception")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('history').addEventListener('click', function(){

     fetch(dndUrl + "history")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('insight').addEventListener('click', function(){

     fetch(dndUrl + "insight")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('intimidation').addEventListener('click', function(){

     fetch(dndUrl + "intimidation")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('investigation').addEventListener('click', function(){

     fetch(dndUrl + "investigation")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('medicine').addEventListener('click', function(){

     fetch(dndUrl + "medicine")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('nature').addEventListener('click', function(){

     fetch(dndUrl + "nature")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('perception').addEventListener('click', function(){

     fetch(dndUrl + "perception")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('performance').addEventListener('click', function(){

     fetch(dndUrl + "performance")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('persuasion').addEventListener('click', function(){

     fetch(dndUrl + "persuasion")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('religion').addEventListener('click', function(){

     fetch(dndUrl + "religion")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('sleight-of-hand').addEventListener('click', function(){

     fetch(dndUrl + "sleight-of-hand")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('stealth').addEventListener('click', function(){

     fetch(dndUrl + "stealth")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

document.getElementById('survival').addEventListener('click', function(){

     fetch(dndUrl + "survival")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillUl = document.getElementById("add-skills");
               var addSkillEl = document.createElement("li");
               var skillName = document.createTextNode(json.name);
               var skillText = document.createTextNode(json.desc[0]);
               addSkillEl.appendChild(skillText);
               skillUl.appendChild(addSkillEl);
           }
           else {
                return null;
           }
          });
});

var clearSkills = function() {
     document.getElementById('add-skills').innerHTML = '';
}

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
});

// saves the user skills to local storafe
var skills = {};
$(".addBtn").on("click", function() {
    var skill = document.getElementById("skill").value;
    localStorage.setItem("Skills", skill);
});