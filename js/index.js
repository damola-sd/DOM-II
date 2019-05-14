// Your code goes here
const containerHome = document.querySelector(".home");
const headerimage = document.querySelector(".intro");
const footer = document.querySelector("footer");
const destination = document.querySelector(".destination");
const destinationButton = document.querySelector(".destination .btn");
const navigationPane = document.querySelector(".main-navgation");
const logoHeading = document.querySelector(".logo-heading");
const nav = document.querySelector("nav");
const destinationContent = document.querySelector(".content-destination");
const contentSection = document.querySelector(".content-section");
const navLink = nav.querySelector(".nav-link");
const navLink1 = nav.querySelector(".nav-link:nth-of-type(2)");
const navLink2 = nav.querySelector(".nav-link:nth-of-type(3)");
// const navLink2 = nav.querySelector(".nav-link:nth-of-type(4)");


window.addEventListener('resize', event => {
    if(window.innerWidth < "550"){
        window.innerWidth = 700;
    }
});

containerHome.addEventListener("mouseover", event => {
    event.target.style.background = 'pink';
});

containerHome.addEventListener("mouseleave", event => {
    event.target.style.background = '';
});


logoHeading.addEventListener("mouseover", event => {
    event.stopPropagation;
});

destination.addEventListener('keydown', logKey);

function logKey(e) {
    destination.innerHTML += ` <h4>${e.code}</h4>`;
}



nav.addEventListener("click", event => {
    alert(`You clicked ${event.target}`);
});

navLink.addEventListener("mouseenter", event =>  {
 // highlight the mouseenter target
 event.target.style.color = "blue";

 // reset the color after a short delay
 setTimeout(function() {
   event.target.style.color = "";
 }, 5000);
}, false);

navLink1.addEventListener("mousedown", event =>  {
    // highlight the mouseenter target
    event.target.style.color = "purple";
   
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 3000);
   }, false);

navLink2.addEventListener("mouseover", event =>  {
    // highlight the mouseenter target
    event.target.style.color = "goldenrod";
   
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 3000);
   }, false);

destinationButton.addEventListener("dblclick", () => {
    alert("Button Double-Clicked!!!");
});

contentSection.addEventListener("select", (event) => {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  alert(`You selected: ${selection}`);
});

navLink.addEventListener('click', e => {
    e.preventDefault;
});

