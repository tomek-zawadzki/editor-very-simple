import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const textarea = document.querySelector(".textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");

/*
const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
  console.log(`${entry}`);
  result = entry;
}
textarea.value = result;
*/

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textarea.value);
});
load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("entry");
});
