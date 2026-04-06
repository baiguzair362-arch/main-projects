let Todos = [];
let todoinp = document.getElementById("todoinp");
let child2 = document.getElementById("child2");
let addbtn = document.getElementById("addbtn");
let updatebtn = document.getElementById("updatebtn");

//working on local storage
function getData() {
let getlocalstoragedata = window.localStorage.getItem("Todos");
if(getlocalstoragedata !== null) {
    let parsedata = JSON.parse(getlocalstoragedata);
    // console.log(parsedata);
Todos = parsedata;
//working on DOM
for(let i=0; i < Todos.length; i++) {
let divelm = document.createElement("div");
divelm.className = "box";
child2.appendChild(divelm);
divelm.innerText = Todos[i].text;
//working on deleting button
let deletebtn = document.createElement("button");
deletebtn.innerText = "Delete";
deletebtn.className = "deletebtn";
divelm.appendChild(deletebtn);
deletebtn.onclick = function () {
    divelm.remove();
    Todos.splice(i,1);
    localStorage.setItem("Todos",JSON.stringify(Todos));
}
//working on change button
let changebtn = document.createElement("button");
changebtn.innerText = "Change";
changebtn.className = "changebtn";
divelm.appendChild(changebtn);
changebtn.onclick = function () {
    todoinp.value = Todos[i].text;
    addbtn.style.display = "none";
    changebtn.style.display = "none";
    deletebtn.style.display = "none";
    updatebtn.style.display = "inline";
//working on update button
updatebtn.onclick = function () {
    if(todoinp.value === "") {
        alert("enter todo");
        return;
    }
    Todos[i].text = todoinp.value;
    divelm.innerText = todoinp.value;
divelm.appendChild(deletebtn);
divelm.appendChild(changebtn);
divelm.appendChild(donebtn);
updatebtn.style.display = "none";
addbtn.style.display = "inline";
deletebtn.style.display = "inline";
changebtn.style.display = "inline";
localStorage.setItem("Todos",JSON.stringify(Todos));
todoinp.value = "";    
}     }    
//working on done button
let donebtn = document.createElement("button");
donebtn.innerText = "Done";
donebtn.className = "donebtn";
divelm.appendChild(donebtn);
donebtn.onclick = function () {
    Todos[i].iscomplete = true;
    divelm.style.backgroundColor = "lightgreen";
    donebtn.style.display = "none";
localStorage.setItem("Todos",JSON.stringify(Todos));    
//working on not done button
let notdonebtn = document.createElement("button");
notdonebtn.innerText = "NotDone";
divelm.appendChild(notdonebtn);
notdonebtn.className = "notdonebtn"
notdonebtn.onclick = function () {
     Todos[i].iscomplete = false;
     divelm.style.backgroundColor = "white";
     donebtn.style.display = "inline";
     notdonebtn.style.display = "none";
localStorage.setItem("Todos",JSON.stringify(Todos));    
}}

}   }
}
getData();




//working on adding and temporary function
function add() {
    if(todoinp.value === "") {
        alert("enter todo");
        return;
    }
//pushing data in the form of objects
let todoobj = {
    text:todoinp.value,
    iscomplete:false,
    ID:Math.floor(Math.random()*999999999999)
}    
Todos.push(todoobj);
// console.log(Todos);
//sending data to local storage
let stringLocalstorage = JSON.stringify(Todos);
window.localStorage.setItem("Todos",stringLocalstorage);
//working on DOM
let divelm = document.createElement("div");
divelm.innerText = todoinp.value;
divelm.className = "box";
child2.appendChild(divelm);
//working on deleting button
let deletebtn = document.createElement("button");
deletebtn.innerText = "Delete"
deletebtn.className = "deletebtn";
divelm.appendChild(deletebtn);
deletebtn.onclick = function () {
    divelm.remove();
    for(let i=0; i < Todos.length; i++) {
        Todos.splice(i,1);
    }
localStorage.setItem("Todos",JSON.stringify(Todos));
}
//working on change button
let changebtn = document.createElement("button");
changebtn.innerText = "Change";
changebtn.className = "changebtn";
divelm.appendChild(changebtn);
changebtn.onclick = function () {
    addbtn.style.display = "none";
    changebtn.style.display = "none";
    deletebtn.style.display = "none";
    updatebtn.style.display = "inline";
todoinp.value = todoobj.text;
//working on update button
updatebtn.onclick = function () {
    if(todoinp.value === "") {
        alert("enter todo");
        return;
    }
    addbtn.style.display = "inline";
    changebtn.style.display = "inline";
    deletebtn.style.display = "inline";
    updatebtn.style.display = "none";
    divelm.innerText = todoinp.value;
    divelm.appendChild(deletebtn);
    divelm.appendChild(changebtn);
    divelm.appendChild(donebtn);y
todoobj.text = todoinp.value;   
localStorage.setItem("Todos",JSON.stringify(Todos));
    todoinp.value = "";
}     }
//working on done button
let donebtn = document.createElement("button");
donebtn.innerText = "Done";
donebtn.className = "donebtn";
divelm.appendChild(donebtn);
donebtn.onclick = function () {
    divelm.style.backgroundColor = "lightgreen";
    todoobj.iscomplete = true;
    donebtn.style.display = "none";
localStorage.setItem("Todos",JSON.stringify(Todos));    
//working on not done button
let notdonebtn = document.createElement("button");
notdonebtn.innerText = "NotDone";
notdonebtn.className = "notdonebtn";
divelm.appendChild(notdonebtn);
notdonebtn.onclick = function () {
    divelm.style.backgroundColor = "white";
    donebtn.style.display = "inline";
    notdonebtn.style.display = "none";
    todoobj.iscomplete = false;
localStorage.setItem("Todos",JSON.stringify(Todos));    
}    }
todoinp.value = "";
}