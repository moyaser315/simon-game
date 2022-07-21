
var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var flag = 0;
var level = 0;
var r = 0;
var cont=1;

    $("body").on("keydown",function(m){
        
        if(flag===0){
        nextSequence();
        
    flag=1; }
    console.log(m.key);
});

$(".btn").click(function (event)
{
    var userChoosencolor=event.target.id;
    userClickedPattern.push(userChoosencolor);
    playSound(userChoosencolor);
    animatePress(userChoosencolor);
    setTimeout( function ()
    { $("#"+userChoosencolor).removeClass("pressed")},100);
    check(userClickedPattern.length-1);
})
    
function check(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        

        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){nextSequence()},1000);
        }
            
    }
    else
    {
        playSound("wrong");
        document.querySelector("body").classList.add("game-over");
        setTimeout(function(){document.querySelector("body").classList.remove("game-over");},200)
        $("#level-title").html("Game Over, Press Any Key to Restart");

        flag=0;   
        gamePattern=[];
        level=0;
    }
}


function playSound(name)
{
    var colorSound = new Audio("sounds/"+name+".mp3");
    colorSound.play();
}
function animatePress(currentColour)
{
     $("#"+currentColour).addClass("pressed")
}
function nextSequence()
{   
    userClickedPattern=[];
    var randomNumber=Math.round(Math.random()*3)
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100,"swing").fadeOut(100,"swing").fadeIn(100,"swing");
    level++;
    $("#level-title").html("level "+level);
}
