const inputBtn = document.querySelector(".inputTag");
const addBtn = document.querySelector(".addbtn");
const taskcontainer = document.querySelector(".taskcontainer");

console.dir(inputBtn);
console.dir(addBtn);
console.dir(taskcontainer);

addBtn.addEventListener("click", addTask);

function addTask() {
  const task = inputBtn.value.trim();
  inputBtn.value = "";

  const newDiv = document.createElement("div");

  newDiv.classList.add("task");
  taskcontainer.appendChild(newDiv);

  newDiv.innerHTML = `
    <p id="task">${task}</p>

    <div class="icons">

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor">
        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor">
        <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z"></path>
      </svg>

    </div>
  `;
}