
//Logic: 1. Both the arrays should be equal it will  check -- userClickedPattern[currentLevel] === gamePattern[currentLevel]
//       2. Only when the length of seq matches and same array it will call next seq or next level until then it will be wrong
//user Clicked pattern
let userClickedPattern = []
//colors used
const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []


//Level variable to keep track on which level.

let level = 0
//initally game whether started or not
let gameStarted = false


//generating a random number seq- from (0-3)
function nextSequence() {
    userClickedPattern = [];
    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $('#level-title').text(`level ${level}`)

    //Generating a random number between 0-3
    let numberGenrated = Math.floor(Math.random() * 4)
    console.log("Before insertion : " + gamePattern)
    //selecting random color.
    var randomChosenColour = buttonColours[numberGenrated]
    console.log(randomChosenColour)
    //push the new color generated into gamePattern -array
    gamePattern.push(randomChosenColour)
    console.log(gamePattern)
    console.log($("#" + randomChosenColour).attr("class"))
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        // If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

        if (userClickedPattern.length === gamePattern.length) {
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong")
        console.log("wrong");
        $("body").addClass("game-over")
        setInterval(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}



//Start the game with keypress.
$(document).on("keypress", () => {
    if (!gameStarted) {
        $('#level-title').text(`level ${level}`)
        nextSequence();
        gameStarted = true;
    }
})


//on user click add the pattern to intial empty array
$(".btn").on("click", (e) => {
    //console.log(e.target)
    console.log(e.target.id)

    let userChoosenColor = e.target.id
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern, userClickedPattern.length)

    playSound(userChoosenColor)
    animatePress(userChoosenColor)

    //To check the answer
    checkAnswer(userClickedPattern.length - 1)
})

function playSound(color) {
    var audio = new Audio(`sounds./${color}.mp3`);
    console.log(audio)
    audio.play();
}


function animatePress(color) {
    console.log("#" + color)
    console.log($("#" + color).addClass("pressed"))
    $("#" + color).addClass("pressed")
    setInterval(() => {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0
    gamePattern = []
    gameStarted = false
}
/*
setInterval(() => {
        $("#" + randomChosenColour).fadeToggle();
    }, 100);
*/

/*
function colorToggle() {
    setInterval(() => {
        $("#" + randomChosenColour).fadeToggle();
    }, 100);
}
*/


//random seq selected with sound

/*
$("#" + randomChosenColour).on("click", () => {
    //colorToggle()
    var audio = new Audio(`sounds./${randomChosenColour}.mp3`);
    console.log(audio)
    audio.play();
});

*/