let textbox = document.querySelector(".textbox");
let tasks = document.querySelector(".tasks");

let e = 1;
let r = 1;
let tid = 1;
let cid = 1;
let Lid = 1;

let arr = [];
function addTask() {
    if (textbox.value == '') {
        console.log("Empty Textbox")
    } else {
        arr.push(textbox.value);
        let maincontainer = document.querySelector('.main-container');
        let items = document.createElement('div');
        items.className = "items display-flex align-item-center justify-center";
        tid++;
        items.id = "T" + tid;

        let circle = document.createElement('img');
        circle.className = "circle";
        cid++;
        circle.id = "I" + cid;
        circle.src = "circle.png";
        circle.setAttribute("onclick", "taskCompleted(this.id)")

        let label = document.createElement('h1');
        label.className = "label border-radius";
        Lid++;
        label.id = "L" + Lid;

        let editbtn = document.createElement('button');
        e++;
        editbtn.innerText = "Edit";
        editbtn.id = "E" + e;
        editbtn.setAttribute("onclick", "editTask(this.id)")
        editbtn.className = "btn border-radius";


        let removebtn = document.createElement('button');
        removebtn.setAttribute("onclick", "removeTask(this.id)")
        r++;
        removebtn.innerText = "Remove";
        removebtn.id = 'R' + r;
        removebtn.className = "btn border-radius";

        items.appendChild(circle);
        items.appendChild(label);
        items.appendChild(editbtn);
        items.appendChild(removebtn);

        maincontainer.appendChild(items);
        label.innerHTML = textbox.value;
        textbox.value = '';

    }
}

function removeTask(id) {
    arr.pop(id);
    let Tid = id.replace("R", "T");
    let taskid = document.getElementById(Tid);
    taskid.remove();

}

function taskCompleted(id) {
    let img = document.getElementById(id);
    let Lid = id.replace("I", "L");
    let label = document.getElementById(Lid);
    if (img.src.includes("circle.png")) {
        img.src = "tick.webp";
        label.style.textDecoration = "line-through"
        label.style.border = "5px solid green";
    } else {
        img.src = "circle.png";
        label.style.textDecoration = "none"
        label.style.border = "none";

    }

}
function saveBtn(id) {
    console.log(id);
}
function editTask(id) {
    let Lid = id.replace("E", "L");
    let Tid = id.replace("E", "T");
    let label = document.getElementById(Lid);
    let task = label.innerText;
    let addBtn = document.getElementById("add-btn");
    addBtn.style.display = "none";
    let saveBtn = document.getElementById("save-btn");
    saveBtn.style.display = "block";
    let preTask = label.innerText;
    textbox.value = task;
    console.log(preTask);
    saveBtn.onclick = () => {
        let index = arr.findIndex(e => e === preTask);
        if (index != -1) {
            arr[index] = textbox.value;
            label.innerText = textbox.value;
            textbox.value = '';
            saveBtn.style.display = "none";
            addBtn.style.display = "block";
        }
    }
}
