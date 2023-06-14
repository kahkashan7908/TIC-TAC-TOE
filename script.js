var restartb = document.querySelector("#restartbtn");
var cells = document.querySelectorAll("td");
//function for restart button
function clearAllCells() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
restartb.addEventListener("click", clearAllCells);

//function for cell
function changeContent() {
  if (this.textContent===" ") {
    this.textContent="X";
} 
else if (this.textContent=="X") {
    this.textContent="O";
  } 
  else {
    this.textContent=" ";
  }
}
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", changeContent);
}

