import './style.css';
import { Load } from './load.js'

const content = document.getElementById("content")

function start() {
  Load.loadContent()
}

start()