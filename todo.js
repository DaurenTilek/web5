const tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const todoMessage = document.getElementById("todoMessage");

function showTasks() {
    taskList.textContent = "";

    tasks.forEach(function (task, index) {
        const item = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "task-" + index;
        checkbox.checked = task.completed;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = task.text;

        if (task.completed) {
            label.classList.add("completed");
        }

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            label.classList.toggle("completed", task.completed);
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            showTasks();
        });

        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(deleteButton);

        taskList.appendChild(item);
    });
}

document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        todoMessage.textContent = "Please enter a task.";
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    showTasks();

    taskInput.value = "";
    todoMessage.textContent = "";
    taskInput.focus();
});