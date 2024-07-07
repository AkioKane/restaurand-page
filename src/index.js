import './style.css';
import { Load } from './load.js';

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const about = document.getElementById("about")
const contact = document.getElementById("contacts")

function start() {
  Load.loadHome();

  home.addEventListener("click", () => {
    Load.loadHome();
  });
  menu.addEventListener("click", () => {
    Load.loadMenu();
  });
  about.addEventListener("click", () => {
    Load.loadAbout();
  })
  contact.addEventListener("click", () => {
    Load.loadContacts();
  })
}

start()