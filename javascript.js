let GridContainer = document.createElement("div")
GridContainer.setAttribute("style", "display: flex")
let NewColumn
document.body.appendChild(GridContainer)

for (let i = 0; i < 256; i++){
    let NewDiv = document.createElement("div")
    NewDiv.setAttribute("style", "background: red; height: 10px; width: 10px; border: 2px solid black;")
    
    if (i%16 == 0){
        NewColumn = document.createElement("div")
        NewColumn.setAttribute("class", "column")
        GridContainer.appendChild(NewColumn)
        NewColumn.appendChild(NewDiv)
        NewColumn.setAttribute("style", "border: 2px dotted blue")
        console.log("new colum ran")
    } else {
        NewColumn.appendChild(NewDiv)
        console.log("old colum ran")

    }




}