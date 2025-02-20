notes = [];

const noteInput = document.getElementById("noteInput");
console.log(localStorage.getItem("notes"));

//Renders Notes UI
function renderNotes() {
  const getNotes = localStorage.getItem("notes");
  if (getNotes) notes = JSON.parse(getNotes);

  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  for (i = 0; i < notes.length; i++) {
    const current = notes[i];
    const notesTemplate = NotesTemplate(i, current.note);
    notesContainer.innerHTML += notesTemplate;
  }
}
//Notes template
const NotesTemplate = (index, note) => {
  return `<div class="noteDisplay">
              <p id="noteText">${note}</p>
              <button id="btnEditNote" onClick="editNote(${index})">Edit</button><button id="btnDeleteNote" onClick="deleteNote(${index})">x</button>        
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

//Edit function
function editNote(index) {
  //Get id of current note text
  const noteIndex = document.querySelector(
    `.noteDisplay:nth-child(${index + 1})`
  );
  const btnEditNote = document.querySelector(
    `.noteDisplay:nth-child(${index + 1}) button:nth-child(2)`
  );

  const btnDeleteNote = document.querySelector(
    `.noteDisplay:nth-child(${index + 1}) button:nth-child(3)`
  );
  btnDeleteNote.disabled = true;
  btnDeleteNote.style.color = "red";

  if (btnEditNote.innerText === "Edit") {
    btnEditNote.innerText = "Save";
    const note = document.querySelector(
      `.noteDisplay:nth-child(${index + 1}) > p`
    );
    note.remove();
    const newNoteInput = document.createElement("input");
    newNoteInput.placeholder = "Enter new note";
    newNoteInput.id = "newNote";

    //Edits new value into local storage
    btnEditNote.addEventListener("click", function () {
      if (btnEditNote.innerText !== "Save" || newNote.value.trim() === "")
        alert("Enter a valid note.");
      else {
        const newNoteValue = newNote.value;
        notes[index].note = newNoteValue;
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
      }
    });
    noteIndex.prepend(newNoteInput);
  }
}

function deleteNote(index) {
  function filterCallback(el, idx) {
    return idx !== index;
  }
  notes = notes.filter(filterCallback);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

btnAddNote.addEventListener("click", addNote);
window.onload = renderNotes();
