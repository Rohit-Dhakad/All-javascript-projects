const inputBtn = document.querySelector(".inputTag");
const addBtn = document.querySelector(".addBtn");
const container = document.querySelector(".taskContainer");
console.log(container);
console.log(inputBtn);
console.log(addBtn);

inputBtn.addEventListener("keydown", function (event) {
  let key = event.key; //  isme key ke nader bo vlaue store ho jati jo hamne keyword par koi bhi event kiya ho
  if (key == "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", addTask);

function addTask() {
  const task = inputBtn.value.trim();
  inputBtn.value = " ";
  if (task.length == 0) {
    alert("Task cannot be empty");
    return;
  }

  const taskinput = document.createElement("div");
  taskinput.classList.add("task");
  container.appendChild(taskinput);
  taskinput.innerHTML = ` <p contenteditable="false" id="task"> ${task} </p>
          <div class="icons">
                  <button id="taskcompletebtn"  class="completebtn">complete</button>

                 <svg
                id="delete"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
      <svg 
      id="edit"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>

      </div>`;

  const deleteBtn = taskinput.querySelector("#delete");
  const editBtn = taskinput.querySelector("#edit");
  const taskcontent = taskinput.querySelector("#task");
  const taskcompletebtn = taskinput.querySelector("#taskcompletebtn");

  let isEditTable = false;
  editBtn.addEventListener("click", function () {
    if (isEditTable) {
      editBtn.setAttribute("fill", "white");
      taskcontent.setAttribute("contenteditable", "false");
      // setAttribute ka matlab ha kisi html ke element ki value set/change karna
    } else {
      editBtn.setAttribute("fill", "red");
      taskcontent.setAttribute("contenteditable", "true");
    }
    isEditTable = !isEditTable;
  });

  let isTaskComplete = false;
  taskcompletebtn.addEventListener("click", function () {
    if (isTaskComplete) {
      taskcompletebtn.classList.remove("incompletebtn");
      taskcompletebtn.classList.add("completebtn");
      taskcompletebtn.innerHTML = "Complete";
      taskcontent.style.textDecoration = "none";
      taskinput.style.backgroundColor = "  #486C2F";
      taskinput.style.order = -1;
    } else {
      taskcompletebtn.classList.remove("completebtn");
      taskcompletebtn.classList.add("incompletebtn");
      taskcompletebtn.innerHTML = "InComplete";
      taskcontent.style.textDecoration = "line-through";
      taskinput.style.backgroundColor = "#c3eba7";
      taskinput.style.order = 1;
    }
    isTaskComplete = !isTaskComplete;
  });

  deleteBtn.addEventListener("click", function () {
    container.removeChild(taskinput);
  });
}
