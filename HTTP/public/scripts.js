let result = ''
const ul = document.querySelector("ul")

function addElement(result) {
    const li = document.createElement('li')
    const a = document.createElement("a")

    a.innerHTML = result
    a.target = "_blank"

    li.append(a)
    ul.append(li)
}

function setValue() {
    this.result = Math.floor(Math.random() * 20) + 1
    document.getElementById("result").innerHTML = this.result
    addElement(this.result)
}