const inputbox = document.querySelector("#inputbox"); //elem / null
const listbox = document.querySelector("#listbox");
const add = document.querySelector(".button"); //node
let editTask = null;
// const listbox = document.getElementById("listbox"); //elem / null
// const inputbox = document.getElementById("inputbox");

const addTask = () => {
  if (inputbox.value === "") window.alert("Enter task and then add to list");
  else if (editTask) {
    editTask.firstChild.textContent = inputbox.value;
    editTask.classList.add("updated");
    editTask = null;
    add.innerHTML = "Add";
  } else {
    //creating a new task
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listbox.appendChild(li);
    //adding edit button to it
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.classList.add("edit");
    li.appendChild(edit);
    //adding close button to it
    let close = document.createElement("span");
    close.innerHTML = "\u00d7";
    li.appendChild(close);
  }
  inputbox.value = "";
  saveData();
};

//it was inline function previously
add.addEventListener("click", addTask);

listbox.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName == "BUTTON") {
    inputbox.value = e.target.parentElement.firstChild.textContent;
    add.innerHTML = "Update";
    editTask = e.target.parentElement;
    editTask.classList.remove("updated");
    // console.log(editTask);
  }
});

const saveData = () => {
  localStorage.setItem("data", listbox.innerHTML);
};

const showData = () => {
  listbox.innerHTML = localStorage.getItem("data");
};
showData();
// localStorage.clear();
