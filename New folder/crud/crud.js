const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button class="edit" onclick="editTask(${index})">✏</button>
                <button class="delete" onclick="deleteTask(${index})">🗑</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const value = taskInput.value.trim();
    if (value) {
        tasks.push(value);
        taskInput.value = "";
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt("Chỉnh sửa công việc:", tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Bạn có chắc muốn xóa công việc này?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});

renderTasks();
