//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";
/*
let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
}; 
*/

document.getElementsByClassName('send:after')[0].addEventListener("click", funFact);

function funFact() {
    alert('My favorite color is purple!')
}

let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "images/myphoto.JPG") {
    myImage.setAttribute("src", "images/kiki.jpeg");
  } else {
    myImage.setAttribute("src", "images/myphoto.JPG");
  }
};
