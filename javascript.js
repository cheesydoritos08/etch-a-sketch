let GridContainer = document.createElement("div")
let NewColumn
GridContainer.setAttribute("style", " display: flex; width: 500px; height: 510px; background: grey; flex-direction: column; ")

document.body.appendChild(GridContainer)

function CreateGrid(length = 16 ){
    let NumberOfDivs = length * length
for (let i = 0; i < NumberOfDivs; i++){
    let NewDiv = document.createElement("div")
    NewDiv.setAttribute("style", `background: red; border: 2px solid green; height: 100%; flex: 1;`)
    NewDiv.classList.add("color-box")
    if (i%length == 0){
        NewColumn = document.createElement("div")
        NewColumn.setAttribute("class", "column")
        GridContainer.appendChild(NewColumn)
        NewColumn.appendChild(NewDiv)
        NewColumn.setAttribute("style", "flex: 1; display: flex;  ")
    } else {
        NewColumn.appendChild(NewDiv)
    }
}
}

function GenerateRandomColor(){
    let MaxColorVal = 0xFFFFFF // Max hexadecimal value
    let RandomColor = Math.floor(Math.random() * MaxColorVal)
    RandomColor = RandomColor.toString(16)
    RandomColor.padStart(6,0)

    return `#${RandomColor.toUpperCase()}`

}

GridContainer.addEventListener("mouseover", function(e){
    let target = e.target
    console.log(target)
    if (target.getAttribute("class") == "color-box"){
        let Color = GenerateRandomColor()
        target.style.backgroundColor = Color
    }
})

CreateGrid(30)