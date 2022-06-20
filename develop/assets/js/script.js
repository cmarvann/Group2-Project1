var skill = "";
var skillClicked = "";
var skillClose = "";
var reset = "";


// container for skills div

var skillEl = document.querySelector("#multiple-skills");

//container for skills-list div 
var addSkillel = document.querySelector("#add-skill");











//function will fetch the skills and convert to JSON



var getSkillsName = function(){





    fetch(dndUrl).then(function (response) {

        console.log(dndUrl);
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

            })
        }

        


    });
    getSkillsName();




    

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


















