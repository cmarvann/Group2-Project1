var dndUrl="https://www.dnd5eapi.co/api/skills/";
var skillArray = [];

var charaEnter = function() {

}

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

var remove = function() {
     document.getElementById("add-skills").deleteRow(0);
     skillArray.length = 0;
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