console.log(1+2);
showNotes();

// code to get note
let addButton = document.getElementById("addButton");
addButton.addEventListener('click', function(e){
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }     
    else{
        notesObj = JSON.parse(notes);
    }
        
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText="";
    console.log(notesObj);
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
               <h5 class="card-title">Note ${index+1}</h5>
               <p class="card-text">${element}</p>
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