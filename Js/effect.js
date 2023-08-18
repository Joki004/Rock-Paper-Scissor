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


const parallaxContainer = document.querySelector(".parallax");
const backgroundLayer = document.getElementById("background");
const foregroundLayer = document.getElementById("foreground");

parallaxContainer.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Adjust the transform property based on mouse position
    const xParallax = (mouseX - parallaxContainer.clientWidth / 2) / 20;
    const yParallax = (mouseY - parallaxContainer.clientHeight / 2) / 30;

    backgroundLayer.style.transform = `translateX(${xParallax}px) translateY(${yParallax}px) scale(2)`;
    ///foregroundLayer.style.transform = `translateX(${-xParallax}px) translateY(${-yParallax}px)`;
});
