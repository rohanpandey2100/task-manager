let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

showTasks();

function addTask(){
    let input=document.getElementById("taskInput");

    if(input.value=="") return;

    tasks.push({
        text:input.value,
        done:false
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    input.value="";
    showTasks();
}

function showTasks(){

    let list=document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{

        list.innerHTML+=`
        <li>
            <span class="${task.done?'done':''}"
            onclick="toggleTask(${index})">
            ${task.text}
            </span>

            <button onclick="deleteTask(${index})">
            X
            </button>
        </li>`;
    });
}

function toggleTask(index){
    tasks[index].done=!tasks[index].done;
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showTasks();
}
