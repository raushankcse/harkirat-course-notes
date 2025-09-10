let i = 0;
function deleteTodo(ele){
  const element = document.getElementById("todo-"+ele);
  element.parentNode.removeChild(element)

  console.log();
}

function addTodo(){
  let inputel = document.querySelector("input");
  let value = inputel.value;
  
  i++;
  let div1 = document.querySelector("#todo");
  let newEl = document.createElement("div");
  newEl.id = "todo-"+i;
  newEl.innerHTML = "<h2>"+value+"</h2><button onclick='deleteTodo("+i+")'>Delete</button>";

  div1.appendChild(newEl);

  
}



