//array for notes
const notes = [];
window.onload = localStorage.getItem("notes");

const noteInput = document.getElementById("noteInput");
console.log(localStorage.getItem("notes"));
//Renders notes in localstorage
function renderNotes() {
  const getNotes = localStorage.getItem("notes");
  if (getNotes) localStorage.getItem(JSON.parse(getNotes));
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  for (i = 0; i < notes.length; i++) {
    const current = notes[i];
    const notesTemplate = NotesTemplate(i, current.note);
    notesContainer.innerHTML += notesTemplate;
  }
}

const NotesTemplate = (index, note) => {
  return `<div id="noteDisplay">
              <h4>Note</h4>
              <br />
              <p>${note}</p>
              <button id="btnDeleteNote" onclick="deleteNote(${index})">X</button>
          </div>`;
};

//Push Note to array and localstorage
function addNote() {
  if (noteInput.value.trim() === "") alert("Enter a valid note.");
  else {
    const noteValue = noteInput.value.trim();
    console.log(noteValue);
    notes.push({ note: noteValue });
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
  }
  renderNotes();
}

// function deleteNote(index) {}

btnAddNote.addEventListener("click", addNote);
