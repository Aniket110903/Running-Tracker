
let entries = [];
let sum = 0;
let avg = 0;
let avgcount=0;
let count =0;
let i=0;
let highest =0;
const entriesWrapper = document.querySelector("#entries");

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItems = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItems.appendChild(listValue);
    entriesWrapper.appendChild(listItems);
}
function updateNewEntry(newEntry){
    sum = sum + newEntry;
    count++;
    if(count >7){
        sum = sum - entries[i];
        i++;
    }
    avgcount++;
    if(avgcount>7 ){
        avgcount = 7;
    }
    avg = sum/avgcount;
    if(count>7){
        highest = 0 ;
    }
    for(let j = i ; j< entries.length; j++){
        if(entries[j]> highest){
            highest = entries[j];
        }
    }
    document.getElementById("total").innerHTML =  sum.toFixed(1); 
    document.getElementById("average").innerHTML = avg.toFixed(1);
    document.getElementById("high").innerHTML = highest.toFixed(1);
}


function handleSubmit(event){
    event.preventDefault()
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    updateNewEntry(entry);
}

const form = document.querySelector("form").addEventListener("submit",handleSubmit);
