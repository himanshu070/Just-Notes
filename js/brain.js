showNotes();

// code to get a note
let addButton = document.getElementById("addButton");

addButton.addEventListener('click', function(e){
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");

    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }     
    else{
        notesObj = JSON.parse(notes);
    }
    
    let myObj = {
        title: addTitle.value,
        note: addText.value
    }

    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value="";
    addTitle.value="";
    console.log("this is " + myObj.title);
    console.log(myObj.note)
    showNotes();
})


// code to show notes
function showNotes(){
    let notes = localStorage.getItem("notes")
    if(notes == null)
        notesObj = []
    else
        notesObj = JSON.parse(notes)
    
    let html = '';
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${element.title}</h5>
               <p class="card-text">${element.note}</p>
               <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
           </div>
        </div>
        
        `
        
    });

    let notesElem = document.getElementById('notes')
    if(notesObj.length != null)
        notesElem.innerHTML = html;
    else
        notesElem.innerHTML = `<h1>nothing to show</h1>`
}


// code to delete a note

function deleteNote(index){
    console.log('del this node', index)

    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }     
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}


// code for search feature
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase(); //converting to lower case
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase(); //converting to lower case
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})