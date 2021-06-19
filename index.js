
const renderNotes = () => {
    const savedNotes = getSavedNotes();
    document.getElementById("allNotesId").innerHTML = "";
    if(!savedNotes.length) return;
    savedNotes.forEach(element => {
        const divEl = document.createElement('div');
        const pEl = document.createElement('p');
        pEl.setAttribute("translate", "true");
        const pEl2 = document.createElement('p');
        pEl2.classList.add('postedDate');
        const textNode = document.createTextNode(element.note);
        const textNodeDate = document.createTextNode(element.date);
        pEl.appendChild(textNode);
        pEl2.appendChild(textNodeDate)
        divEl.appendChild(pEl);
        divEl.appendChild(pEl2);
        document.getElementById("allNotesId").appendChild(divEl);

    });
   
}
const saveNotes = () =>{
    const note = getTextFromTextArea();
    if(!note) return;
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
    const text = notesId.value;
    notesId.value = "";
    return text;
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

