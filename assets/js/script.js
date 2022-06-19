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

    var subclass = document.getElementById("subclass").value;
    localStorage.setItem("Subclass", subclass);
});

// saves the user skills to local storafe
var skills = {};
$(".addBtn").on("click", function() {
    var skill = document.getElementById("skill").value;
    localStorage.setItem("Skills", skill);
});

// dragon api
var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('sky', 'assets/skies/deepblue.png');
    game.load.image('dragonTexture', 'assets/creature/dragon.png');
    game.load.json('dragonMesh', 'assets/creature/dragon.json');
}

var dragon = null;

function create() {
    game.add.image(0, 0, 'sky');

    dragon = game.add.creature(450, 350, 'dragonTexture', 'dragonMesh');

    dragon.scale.set(25.0);
    
    dragon.play(true); //  true = loop
};

