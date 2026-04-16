const checkbox = document.getElementById("complete");
const title = document.getElementById("todo-title");
const statusEl = document.getElementById("status");
const timeEl = document.getElementById("time-remaining");
const statusControl = document.getElementById("status-control");
const toggleBtn = document.querySelector("[data-testid='test-todo-expand-toggle']");
const descriptionSection = document.getElementById("description-section");
const overdueIndicator = document.querySelector("[data-testid='test-todo-overdue-indicator']");
const editBtn = document.querySelector("[data-testid='test-todo-edit-button']");
const deleteBtn = document.querySelector("[data-testid='test-todo-delete-button']");
const editForm = document.getElementById("edit-form");
const editTitle = document.getElementById("edit-title");
const editDescription = document.getElementById("edit-description");
const editPriority = document.getElementById("edit-priority");
const editDate = document.getElementById("edit-date");
const saveBtn = document.querySelector("[data-testid='test-todo-save-button']");
const cancelBtn = document.getElementById("cancel-btn");

let dueDate = new Date("2026-04-16T18:00:00Z");
let intervalId = null;

function updateTime() {
    if (statusEl.textContent === "Done") {
        timeEl.textContent = "Completed";
        overdueIndicator.classList.remove("overdue-visible");
        overdueIndicator.classList.add("overdue-hidden");
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        return;
    }

    const now = new Date();
    const diff = dueDate - now;

    if (diff <= 0) {
        timeEl.textContent = "Overdue!!";
        overdueIndicator.classList.remove("overdue-hidden");
        overdueIndicator.classList.add("overdue-visible");
    } else {
        overdueIndicator.classList.remove("overdue-visible");
        overdueIndicator.classList.add("overdue-hidden");

        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            timeEl.textContent = `Due in ${days} day(s)`;
        } else if (hours > 0) {
            timeEl.textContent = `Due in ${hours} hour(s)`;
        } else if (minutes > 0) {
            timeEl.textContent = `Due in ${minutes} minute(s)`;
        } else {
            timeEl.textContent = "Due now!";
        }
    }
}

function startTimeUpdate() {
    updateTime();
    if (!intervalId) {
        intervalId = setInterval(updateTime, 60000);
    }
}

startTimeUpdate();

// Initialize status class
statusEl.className = `status ${statusEl.textContent.toLowerCase().replace(' ', '-')}`;

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        title.style.textDecoration = "line-through";
        statusEl.textContent = "Done";
        statusEl.className = "status done";
        statusControl.value = "Done";
        document.querySelector(".card").classList.add("done");
    } else {
        title.style.textDecoration = "none";
        statusEl.textContent = statusControl.value || "Pending";
        statusEl.className = `status ${(statusControl.value || "Pending").toLowerCase().replace(' ', '-')}`;
        document.querySelector(".card").classList.remove("done");
    }
    updateTime();
});

statusControl.addEventListener("change", () => {
    statusEl.textContent = statusControl.value;
    statusEl.className = `status ${statusControl.value.toLowerCase().replace(' ', '-')}`;
    if (statusControl.value === "Done") {
        checkbox.checked = true;
        title.style.textDecoration = "line-through";
        document.querySelector(".card").classList.add("done");
    } else {
        checkbox.checked = false;
        title.style.textDecoration = "none";
        document.querySelector(".card").classList.remove("done");
    }
    updateTime();
});

toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    descriptionSection.classList.toggle("expanded");
    toggleBtn.textContent = isExpanded ? "Show More" : "Show Less";
});

let originalTitle, originalDescription, originalPriority, originalDueDate;

editBtn.addEventListener("click", () => {
    // Store original values
    originalTitle = title.textContent;
    originalDescription = document.querySelector("[data-testid='test-todo-description']").textContent;
    originalPriority = document.querySelector("[data-testid='test-todo-priority']").textContent.split(' ')[1].toLowerCase();
    originalDueDate = dueDate;

    // Populate form
    editTitle.value = originalTitle;
    editDescription.value = originalDescription;
    editPriority.value = originalPriority.charAt(0).toUpperCase() + originalPriority.slice(1);
    editDate.value = originalDueDate.toISOString().slice(0, 16);
    editForm.classList.remove("hidden");
    editTitle.focus();
});

deleteBtn.addEventListener("click", () => {
    alert("Delete clicked");
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Update values
    title.textContent = editTitle.value;
    document.querySelector("[data-testid='test-todo-description']").textContent = editDescription.value;
    // Update priority
    const prioritySpan = document.querySelector("[data-testid='test-todo-priority']");
    const indicatorSpan = document.querySelector("[data-testid='test-todo-priority-indicator']");
    const pri = editPriority.value.toLowerCase();
    let emoji = "🟢";
    if (pri === "medium") emoji = "🟡";
    else if (pri === "high") emoji = "🔴";
    prioritySpan.textContent = `${emoji} ${editPriority.value}`;
    indicatorSpan.className = `priority-indicator ${pri}`;
    // Update due date
    dueDate = new Date(editDate.value);
    startTimeUpdate();
    editForm.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
    // Restore original values
    title.textContent = originalTitle;
    document.querySelector("[data-testid='test-todo-description']").textContent = originalDescription;
    const prioritySpan = document.querySelector("[data-testid='test-todo-priority']");
    const indicatorSpan = document.querySelector("[data-testid='test-todo-priority-indicator']");
    let emoji = "🟢";
    if (originalPriority === "medium") emoji = "🟡";
    else if (originalPriority === "high") emoji = "🔴";
    prioritySpan.textContent = `${emoji} ${originalPriority.charAt(0).toUpperCase() + originalPriority.slice(1)}`;
    indicatorSpan.className = `priority-indicator ${originalPriority}`;
    dueDate = originalDueDate;
    updateTime();
    editForm.classList.add("hidden");
});