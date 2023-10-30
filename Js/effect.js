let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.2 + "px";
  moon.style.top = -value * 1 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.5 + "px";
  text.style.top = value * 1 + "px";
  rock.style.left = -value * 1 + "px";
  paper.style.top = -value * 1 + "px";
  scissors.style.left = value * 1 + "px";
});


const startButton = document.getElementById("start");
const gameDiv = document.getElementById("game");

startButton.addEventListener("click", function () {
 
    // Scroll to the game div
    gameDiv.scrollIntoView({
       
        behavior: "smooth" // Use smooth scrolling animation
    });
});




function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -1; // Adjust this value to set the desired offset
      const offsetPosition = section.offsetTop - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }




  