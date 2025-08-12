let draggedTask = null;

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim()) {
        createTask(input.value, "todo");
        input.value = "";
    }
}

function createTask(text, columnId) {
    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.textContent = text;

    task.addEventListener("dragstart", e => {
        draggedTask = task; // lưu element đang kéo
    });

    task.addEventListener("dragend", e => {
        draggedTask = null; // reset sau khi thả
    });

    document.getElementById(columnId).appendChild(task);
}

document.querySelectorAll(".column").forEach(col => {
    col.addEventListener("dragover", e => e.preventDefault());
    col.addEventListener("drop", e => {
        if (draggedTask) {
            col.appendChild(draggedTask); // chuyển task sang cột mới
        }
    });
});
