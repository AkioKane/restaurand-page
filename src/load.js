export class Load {
  constructor() {
    // ...
  }

  static loadContent() {
    let container = document.createElement("div")
    container.classList.add("container")
    content.appendChild(container)

    let h1 = document.createElement("h1")
    h1.innerHTML = "Restaurant La Pizza`s"
    container.appendChild(h1)

    let hr = document.createElement("hr")
    container.appendChild(hr)

    let p = document.createElement("p")
    p.innerHTML = "Best Pizza`s in the world!"
    container.appendChild(p)

    let btn = document.createElement("button")
    btn.classList.add("btn-menu")
    btn.innerHTML = "MENU"
    container.appendChild(btn)
  }
}
