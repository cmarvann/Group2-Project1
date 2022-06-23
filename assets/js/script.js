var dndUrl="https://www.dnd5eapi.co/api/skills/";
var skillArray = [];

var nameInputEl = document.querySelector(".name-input");
var raceInputEl = document.querySelector(".race-input");
var classInputEl = document.querySelector(".class-input");

var characterForm = document.querySelector(".character-sheet");
var storeCharacterName = [];
var storeCharacterRace = [];
var storeCharacterClass = [];

var nameEntryEl = document.getElementById("name");
var raceEntryEl = document.getElementById("race");
var classEntryEl = document.getElementById("class");

var enterChara = function() {
          
     storeCharacterName.push(nameInputEl);
     
          if(storeCharacterName.length <= 1){  
               var nameTable = document.getElementById("chara");
               var nameRow = nameTable.insertRow(0);
               nameRow.setAttribute('id', 'name-row');
               var nameHead = nameRow.insertCell(0);
               var nameText = nameRow.insertCell(1);
               nameHead.innerHTML = "Name:";
               nameText.innerHTML =  nameInputEl.value;
          }

     storeCharacterRace.push(raceInputEl);
     
          if(storeCharacterRace.length <= 1){  
               var raceTable = document.getElementById("chara");
               var raceRow = raceTable.insertRow(1);
               raceRow.setAttribute('id', 'race-row');
               var raceHead = raceRow.insertCell(0);
               var raceText = raceRow.insertCell(1);
               raceHead.innerHTML = "Race:";
               raceText.innerHTML =  raceInputEl.value;
          }

     storeCharacterClass.push(classInputEl);
     
          if(storeCharacterClass.length <= 1){  
               var classTable = document.getElementById("chara");
               var classRow = classTable.insertRow(2);
               classRow.setAttribute('id', 'class-row');
               var classHead = classRow.insertCell(0);
               var classText = classRow.insertCell(1);
               classHead.innerHTML = "Class:";
               classText.innerHTML =  classInputEl.value;
          }

};

var acrobatics = function(){

    fetch(dndUrl + "acrobatics")
         .then(response => response.json())
         .then(json => {
          skillArray.push(json.desc[0]);
          if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
          }
          else {
               return null;
          }
              
         });
};

var animal = function(){

     fetch(dndUrl + "animal-handling")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
               
          });
};

var arcana = function(){

     fetch(dndUrl + "arcana")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var athletics = function(){

     fetch(dndUrl + "athletics")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var deception = function(){

     fetch(dndUrl + "deception")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var hist = function(){

     fetch(dndUrl + "history")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var insight = function(){

     fetch(dndUrl + "insight")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var intimidation = function(){

     fetch(dndUrl + "intimidation")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var investigation = function(){

     fetch(dndUrl + "investigation")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var medicine = function(){

     fetch(dndUrl + "medicine")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var nature = function(){

     fetch(dndUrl + "nature")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var perception = function(){

     fetch(dndUrl + "perception")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var perf = function(){

     fetch(dndUrl + "performance")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var persuasion = function(){

     fetch(dndUrl + "persuasion")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var religion = function(){

     fetch(dndUrl + "religion")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var sleight = function(){

     fetch(dndUrl + "sleight-of-hand")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var stealth = function(){

     fetch(dndUrl + "stealth")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
};

var survival = function(){

     fetch(dndUrl + "survival")
          .then(response => response.json())
          .then(json => {
           skillArray.push(json.desc[0]);
           if (skillArray.length <= 2){
               var skillTable = document.getElementById("add-skills");
               var skillRow = skillTable.insertRow(0);
               var skillName = skillRow.insertCell(0);
               var skillText = skillRow.insertCell(1);
               skillName.innerHTML = json.name;
               skillText.innerHTML = json.desc[0];
           }
           else {
                return null;
           }
          });
}

var removeSkill = function() {
     document.getElementById("add-skills").deleteRow(0);
     skillArray.length = 0;
}

var reset = function() {
     document.getElementById("name-row").remove();
     document.getElementById("race-row").remove();
     document.getElementById("class-row").remove();
     storeCharacterClass.length = 0;
     storeCharacterName.length = 0;
     storeCharacterRace.length = 0;
}

var user = {}
$(".saveBtn").on("click", function() {
    var name = document.getElementById("name").value;
    localStorage.setItem("Name", name);

    var race = document.getElementById("race").value;
    localStorage.setItem("Race", race);

    var userClass = document.getElementById("class").value;
    localStorage.setItem("Class", userClass);
});

var skills = {};
$(".addBtn").on("click", function() {
    var skill = document.getElementById("skill").value;
    localStorage.setItem("Skills", skill);
});