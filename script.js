let actualDate = new Date();
const actualYear = actualDate.getFullYear().toString();
const addToH1 = document.createTextNode(actualYear);
const h1Year = document.querySelector('h1');
h1Year.appendChild(addToH1);
let tasks = 0;

const addButton = document.getElementById('add');
const deleteAllButton = document.querySelector(".deleteAll")
const form = document.getElementById('form')
addButton.addEventListener('click',addTask);
deleteAllButton.addEventListener('click',deleteAll);  
const leftToDO = document.querySelector('p');


function addTask(){
      let inputBox = document.getElementById("input").value;
      if(inputBox == "")
      {
            alert("Please, write new task before you click add");
      }
      else
      {
            const taskBox = document.getElementById('task-box');
            const newDiv = document.createElement('div');
            const newLi = document.createElement('li');
            const newButton = document.createElement('button');
            newDiv.className = "task";
            newLi.innerHTML = inputBox;
            newButton.className = "deleteBtn"
            newButton.innerHTML = "Delete"
            taskBox.appendChild(newDiv);
            newDiv.appendChild(newLi);
            newDiv.appendChild(newButton);
            tasks += 1;
            leftToDO.innerHTML = "Left to do " + tasks.toString();
            document.getElementById("input").value = "";
      }
}

function deleteAll(){
      const allTaskst = document.getElementsByClassName('task');
      if(allTaskst.length <= 0)
      {
            alert("You don't have new tasks");
      }
      else
      {
            taskArray = [];
            for(let i = allTaskst.length - 1; i >= 0; i--)
            {
                  allTaskst[i].remove();
            }
            tasks = 0;
            leftToDO.innerHTML = "Left to do " + tasks.toString();
      }
}

let time;

time = setInterval(deleteSingle)
function deleteSingle(){
      let remove = document.getElementsByClassName("deleteBtn");
      let toRemove = document.getElementsByClassName('task');
      for (let i = 0; i < remove.length; i++) {
            remove[i].onclick = function() {
            console.log(toRemove)
            toRemove[i].remove();
            tasks -= 1;
            leftToDO.innerHTML = "Left to do " + tasks.toString();
        }
      }
      
}
