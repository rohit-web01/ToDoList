let btn = document.querySelector("button");
let input = document.querySelector("#input-box");
let taskList = document.querySelector(".task-container");

// Adding Input Task to Task List
btn.addEventListener("click", () => {
    if(input.value === ''){
        alert("You must write something!");
    }else{
        let task = document.createElement("li");
        task.innerHTML = input.value;
        taskList.appendChild(task);
        input.value = '';
        let crossBtn = document.createElement("span");
        crossBtn.innerHTML = "\u00d7";
        task.appendChild(crossBtn);
    }
    saveData();
});

// Adding & Removing Task That Are Completed
taskList.addEventListener("click", (evt) => {
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        saveData();
    }else if(evt.target.tagName === "SPAN"){
        evt.target.parentNode.remove();
        saveData();
    }
});

// For Saving Data to Local Storage.
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

// For Showing Previous After Reload
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();