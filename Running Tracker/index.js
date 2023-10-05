
let entries = [];
const entriesWrapper = document.querySelector("#entries");

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItems = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItems.appendChild(listValue);

    entriesWrapper.appendChild(listItems);
}

function handleSubmit(event){
    event.preventDefault()
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
}

const form = document
.querySelector("form")
.addEventListener("submit",handleSubmit);
