const arrow = document.getElementById("arrow");
const block = document.getElementById("block");
var score = 0;
var hits = 0;
var times = 0;
var msecs = 0;  
var arr = []
var oldscore = 0;
var random = 1;

function jump() {
  arrow.classList.add("jump");

  setTimeout(function () {
    arrow.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let arrowTop = parseInt(window.getComputedStyle(arrow).getPropertyValue("top"));

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if(msecs >= 0)
    msecs++;
  if (blockLeft < 50 && blockLeft > 0 && arrowTop <= 30) {
    score++;
    arr[times] = 1;
  }
  if(msecs % 100 == 0)
  {
    console.log("+" + (score-oldscore));
    document.getElementById("Info").innerHTML = "Block " + (times+2) + "/10";
    document.getElementById("Score").innerHTML = "Score: " + score;
    oldscore = score;
    times++;
    msecs = 0;
  }
  //console.log(25-Math.random()*25);
  //document.getElementById("block").style.top = 25-Math.random()*25 + "px";
  
  if(times == 10)
  {
    console.log("Your final score is: " + score);
    document.getElementById("Info").innerHTML = "Your final score is: " + score;
    msecs = -99;
    times = -999;
    let cnt = 0;
    for(let i = 0; i < 10; i++)
    {
      if(arr[i] >= 0)
      cnt += arr[i];
    }
    console.log("You hit the block a total of " + cnt + " out of 10 times!");
    let grade = "A+";
    if(score >= 65)
    {
      grade = "A+"
    }
    else if(score >= 55)
    {
      grade = "A";
    }
    else if(score >= 45)
    {
      grade = "B";
    }
    else if (score >= 35)
    {
      grade = "C";
    }
    else if (score >= 30)
    {
      grade = "D"
    }
    else if (score >= 15)
    {
      grade = "F";
    }
    else
    {
      grade = "F-"
    }
    document.getElementById("Grade").innerHTML = "Your final grade is: " + grade;
	document.getElementById("block").style.backgroundColor = "#c9ffda";
  }
}, 10);
document.addEventListener("keydown", function (event) {
  jump();
});
