import './style.css';
import { Load } from './load.js';

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const about = document.getElementById("about")
const btnMenu = document.querySelector(".btn-menu")

function start() {
  Load.loadHome();

  home.addEventListener("click", () => {
    Load.loadHome();
  });
  menu.addEventListener("click", () => {
    Load.loadMenu();
  });
  
}

start()