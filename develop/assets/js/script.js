var skill = "";
var skillClicked = "";
var skillClose = "";
var reset = "";




// //container for skills-list div 
 var addSkillel = document.querySelector("#form");











//function will fetch the skills and convert to JSON





var dndUrl = "https://www.dnd5eapi.co/api/skills/";







    fetch(dndUrl).then(function (response) {

        console.log(dndUrl);
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

            })
        }

        


    });


   var newElement = function(){


    var singleSkillEl = document.querySelector(".single-skill");

    singleSkillEl.addEventListener("click",function(event){

        if(event){
            singleSkillEl.appendChild(addSkillel);

        }
        


        
        

     })
       
    
    } 
            
       
    
    




    







//  document.querySelector(".single-skill").addEventListener("click",function(event){
//      console.log("hello world");
//      console.log(event.target);

     //  })


// var newElement = function() {
   
//     var newSkillEl = document.querySelector(".new-skills");
//     console.log(newSkillEl.textContent);
//     newSkillEl.textContent = "hello world";

// }


















