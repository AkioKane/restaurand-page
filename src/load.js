const content = document.getElementById("content")

export class Load {
  constructor() {
    // initialization variables
  }

  static clear() {
    content.innerHTML = ""
  }

  static item(elementChild, name, text, ammout) {
    let item = document.createElement("div")
    item.classList.add("item")
    elementChild.appendChild(item)

    let head = document.createElement("h1")
    head.innerHTML = name
    item.appendChild(head)

    let p = document.createElement("p")
    p.innerHTML = text
    item.appendChild(p)

    let cost = document.createElement("h1")
    cost.innerHTML = ammout + "$"
    item.appendChild(cost)

    let hr = document.createElement("hr")
    item.appendChild(hr)
  }

  static loadHome() {
    this.clear()

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

    btn.addEventListener("click", () => {
      this.loadMenu()
    })
  }

  static loadMenu() {
    this.clear()

    let menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    content.appendChild(menuContainer)

    let container = document.createElement("div")
    container.classList.add("container")
    menuContainer.appendChild(container)

    let h1 = document.createElement("h1")
    h1.innerHTML = "MENU"
    container.appendChild(h1)
    
    let hr = document.createElement("hr")
    container.appendChild(hr)

    this.item(container, "Peperoni", "Сreamy mozzarella cheese and delicate tomato sauce, as well as spicy sausages.", 20)
    this.item(container, "Margarita", "Сlassic Italian pizza, best tomato.", 15)
    this.item(container, "Cesadilia", "Chicken, Chicken", 30)
  }
}
