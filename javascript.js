let GridContainer = document.createElement("div")
let NewColumn
let ChangeButton = document.querySelector("button")

GridContainer.setAttribute("style", " display: flex; width: 700px; height: 700px; background: grey; flex-direction: column; ")
document.body.appendChild(GridContainer)

function CreateGrid(length = 16 ){
    let NumberOfDivs = length * length
for (let i = 0; i < NumberOfDivs; i++){
    let NewDiv = document.createElement("div")
    NewDiv.setAttribute("style", `background: white; border: 1px solid black; height: 100%; flex: 1;`)
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
    if (target.getAttribute("class") == "color-box"){
        let Color = GenerateRandomColor()
        target.style.backgroundColor = Color
    }
})

ChangeButton.addEventListener("click", function(e){
    let GridLength =  Number(prompt("What size would you like the grid to be?"))

    console.log(typeof GridLength)
    if (isNaN(GridLength) || GridLength > 100 || GridLength == 0){
        console.log(GridLength)
        alert("Please enter a number that's below 100!")
    } else { 
        console.log(GridLength)
        let GridDimensionText = document.querySelector(".grid-dimensions")
        let ColumnList = Array.from(document.querySelectorAll(".column"))

        for (i=0; i<ColumnList.length; i++){
            GridContainer.removeChild(ColumnList[i])
        }

        GridDimensionText.textContent = `Current Grid Dimension: ${GridLength} x ${GridLength}`
        CreateGrid(GridLength)
    }

})

CreateGrid()