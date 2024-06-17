const inputbox = document.getElementById("inputbox");
const listbox = document.getElementById("listbox");

const addTask = () => {
    if(inputbox.value ===''){
        window.alert("Enter task and then add to list")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listbox.appendChild(li);
        let close = document.createElement("span");
        close.innerHTML= "\u00d7";
        li.appendChild(close);
    }
    inputbox.value='';
}

listbox.addEventListener('click',(e) => {
    // console.log(e.target.tagName);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
    }
});