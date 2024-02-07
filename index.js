// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById('theme-button')

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    let body = document.body;
    body.classList.toggle('dark-body');
  
    let stuff = document.querySelectorAll('button, h2');

    for (let i = 0; i < stuff.length; i++) {
      stuff[i].classList.toggle('dark-button');
    }
}

themeButton.addEventListener("click", toggleDarkMode);
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.

// Add your query for the sign now button here

let signNowButton = document.getElementById('sign-now-button')

let signature_count = 3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
  const name = person.name;
  const town = person.hometown;

  let newSignature = document.createElement('p');

  newSignature.textContent = "🖊️ " + name + " from " + town + " supports this.";

  let signaturesDiv = document.querySelector('.signatures');

  signaturesDiv.appendChild(newSignature);

  let oldCounter = document.getElementById('counter');

  oldCounter.remove();

  let newCounter = document.createElement('p');
  newCounter.textContent = "🖊️ " + ++signature_count + " people have signed this petition and support this cause.";

  signaturesDiv.appendChild(newCounter);
}

// Add a click event listener to the sign now button here
//signNowButton.addEventListener('click', addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const toggleModal = (person) => {
  modal = document.querySelector(".modal");
  modalContent = document.querySelector("#thanks-modal-content");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}, ${person.hometown} represent!`;

  intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

scaleFactor = 1;
modalImage = document.querySelector("#modal-image");

scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  }
  else if (scaleFactor === 0.8) {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
}

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  if (person.name.length < 2) {
    containsErrors = true;
    petitionInputs[0].classList.add('error');
  }
  else {
    petitionInputs[0].classList.remove('error');
  }
  if (person.hometown.length < 2) {
    containsErrors = true;
    petitionInputs[1].classList.add('error');
  }
  else {
    petitionInputs[1].classList.remove('error');
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email) !== true) {
    containsErrors = true;
    petitionInputs[2].classList.add('error');
  }

  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email) === true) {
    petitionInputs[2].classList.remove('error');
  }

  if (containsErrors === false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);