const taskform=document.getElementById("task-form");
const tasklist=document.getElementById("task-list");
// variable compteur pris comme index
let taskIndex=1;


taskform.addEventListener("submit", function(event){
    event.preventDefault();
const taskinput = document.getElementById("task-input");
const taskText = taskinput.value.trim();

//console.log(taskText);
if(taskText!==""){    
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent =`${taskIndex} - ${taskText}`;

    taskItem.addEventListener("click", function() {
        console.log("completed");
        this.classList.toggle("completed");
    });
    //Append la tache dans la liste des taches
    tasklist.appendChild(taskItem);
    //Incrementation de l'index
    taskIndex++;
    taskinput.value="";
}
})