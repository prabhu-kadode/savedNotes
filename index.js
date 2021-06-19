
const renderNotes = () => {
    const savedNotes = getSavedNotes();
    document.getElementById("allNotesId").innerHTML = "";
    if(!savedNotes.length) return;
    savedNotes.forEach(element => {
        const divEl = document.createElement('div');
        const pEl = document.createElement('p');
        const textNode = document.createTextNode(element.note);
        pEl.appendChild(textNode);
        divEl.appendChild(pEl);
        document.getElementById("allNotesId").appendChild(divEl);

    });
   
}
const saveNotes = () =>{
    const note = getTextFromTextArea();
    const notesBuilt = buildNotes(note);
    const savedNotes = getSavedNotes();
    localStorage.setItem('savedNotes',JSON.stringify([...savedNotes,notesBuilt]));

    renderNotes();
 }
const getSavedNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    return savedNotes;
}
const getTextFromTextArea = () => {
    const notesId = document.getElementById("notes");
    return notesId.value;
}
const buildNotes = (note) => {
    const noteId = generateRandomId();
    const currentDate = new Date().toString();
    return {
        noteId,
        note,
        date:currentDate,
    }
}
const generateRandomId = () => {
    return "id_" + Math.floor(new Date().valueOf() * Math.random());
}
renderNotes();

