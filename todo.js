const checkbox = document.getElementById("complete");
const title = document.getElementById("todo-title");
const status = document.getElementById("status");
const timeEl = document.getElementById("time-remaining");

const dueDate = new Date("2026-04-16T18:00:00Z");

function updateTime() {
    const now = new Date();
    const diff = dueDate - now;

    if (diff <= 0){
        timeEl.textContent="Overdue!!"; return;}

        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0){
        timeEl.textContent= `Due in ${days} day(s)`;
} else if (hours > 0) {
    timeEl.textContent = `Due in ${hours} hour(s)`;
} else if (minutes > 0){
    timeEl.textContent = `Due in ${minutes} minute(s)`;
}
else{
    timeEl.textContent = `Due now!`
}
}

updateTime();

/*Optioal auto update every 60s*/
setInterval(updateTime, 60000);

checkbox.addEventListener("change", () => {
    if (checkbox.checked){
        title.style.textDecoration = "line-through";
        status.textContent ="Done"; 
    } else {
        title.style.textDecoration ="none";
        status.textContent = "Pending";
    }
});

/*Buttons*/
document
.querySelector("[data-testid= \"test-todo-edit-button\"]")
.addEventListener("click", () => console.log("edit clicked"))

document
.querySelector("[data-testid= \"test-todo-delete-button\"]")
.addEventListener("click", () => alert("Delete clicked"));