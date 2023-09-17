let noteList = document.getElementById("noteList");
let noteInput = document.getElementById("noteInput");
let addButton =document.getElementById("addButton");

addButton.addEventListener("click", addNote);

function addNote() {
  let noteText = noteInput.value;
  if (noteText.trim() === "") {
    alert("Please enter a note.");
    return;
  }
  let listItem = document.createElement("li");
  let noteNode = document.createTextNode(noteText);
  listItem.appendChild(noteNode);
  noteList.appendChild(listItem);
  noteInput.value = "";
}