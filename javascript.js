let GridContainer = document.createElement("div")
document.body.appendChild(GridContainer)

for (let i = 0; i < 16; i++){
    let NewDiv = document.createElement("div")
    NewDiv.setAttribute("style", "background: red; height: 50px; width: 50px; border: 2px solid black;")
    GridContainer.appendChild(NewDiv)
    console.log("done")
}