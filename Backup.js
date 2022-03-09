//alert("hello")

console.log($("h1"))

//generating a random number seq- from (0-3)
function nextSequence() {
    let numberGenrated = Math.floor(Math.random() * 4)
    return numberGenrated
}

//user Clicked pattern
const userClickedPattern = []
//colors used
const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = []
console.log("Before insertion : " + gamePattern)
//selecting random color.
var randomChosenColour = buttonColours[nextSequence()]
console.log(randomChosenColour)

//push the new color generated into gamePattern -array
gamePattern.push(randomChosenColour)
console.log(gamePattern)

console.log($("#" + randomChosenColour).attr("class"))


//Level variable to keep track on which level.

const level = 0

const gameStarted = false

//Start the game with keypress.
$(document).on("keypress", () => {
    if (!gameStarted) {

    }
    nextSequence()
    $('h1').text(`level ${level}`)

})
$("#" + randomChosenColour).on("click", () => {
    //colorToggle()
    var audio = new Audio(`sounds./${randomChosenColour}.mp3`);
    console.log(audio)
    audio.play();
});


//on user click add the pattern to intial empty array
$(".btn").on("click", (e) => {
    console.log(e.target)
    console.log(e.target.id)
    let userChoosenColor = e.target.id
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern)
    playSound(userChoosenColor)
    animatePress(userChoosenColor)
})

function playSound(color) {
    var audio = new Audio(`sounds./${color}.mp3`);
    console.log(audio)
    audio.play();
}

/*
function colorToggle() {
    setInterval(() => {
        $("#" + randomChosenColour).fadeToggle();
    }, 100);
}
*/

function animatePress(color) {
    console.log("#" + color)
    console.log($("#" + color).addClass("pressed"))
    setInterval(() => {
        $("#" + color).removeClass("pressed");
    }, 100);
}

/*
setInterval(() => {
        $("#" + randomChosenColour).fadeToggle();
    }, 100);
*/