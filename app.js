let btn = document.querySelector("button");
let input = document.querySelector("#input-box");
let taskList = document.querySelector(".task-container");

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
});

taskList.addEventListener("click", (evt) => {
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
    }else if(evt.target.tagName === "SPAN"){
        evt.target.parentNode.remove();
    }
});