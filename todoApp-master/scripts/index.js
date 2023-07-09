async function getData()
{
  let api = await fetch(`https://fakestoreapi.com/products`)
  let data = await api.json();
  console.log("data",data)
}
getData()


let todoArray = JSON.parse(localStorage.getItem("todos")) || [];
appendTodo();


let handleClick = () => {
  // alert("iam clicked")

  let value = document.querySelector("#todo_input").value

  if (!value) {
    alert("Type something");
    return;
  }

  let payload = {
    todo: value,
    status: false,
    id: Date.now(), value
  }
  todoArray.push(payload);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  // window.location.reload();
  appendTodo();

}

// id:Date.now(),value  ----solt----
function appendTodo() {
  let container = document.querySelector("#all_tododiv");
  container.innerHTML = null;
  todoArray.map((el, i) => {

    let mainDiv = document.createElement("div");
    let todoDiv = document.createElement("div");
    let toggleDiv = document.createElement("div");
    let deleteDiv = document.createElement("div");

    let todoH3 = document.createElement("h3");
    let toggleButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    todoH3.innerText = el.todo;

    if (el.status) {
      toggleButton.innerText = "Done";
      toggleButton.style.backgroundColor = "green"
    }
    else {
      toggleButton.innerText = "NotDone";
      toggleButton.style.backgroundColor = "red"

    }
    deleteButton.innerText = "Delete";

    toggleButton.addEventListener("click", () =>{
      updateTodo(el.id);
    }) 
    deleteButton.addEventListener("click", () =>{
      deleteTodo(el.id);
    })


    todoDiv.append(todoH3);
    toggleDiv.append(toggleButton);
    deleteDiv.append(deleteButton);
    mainDiv.append(todoDiv, toggleDiv, deleteDiv);
    container.append(mainDiv);
  })
}

function updateTodo(id){
   todoArray = todoArray.map((el,i) =>{
   if(el.id === id){
    return{ ...el, status:!el.status, }
   }
   else{
    return el;
   }
  })
localStorage.setItem("todos", JSON.stringify(todoArray))
appendTodo()
  console.log(todoArray);
}

function deleteTodo(id)
{
  todoArray = todoArray.filter((el) =>{
    return el.id != id
  })
  localStorage.setItem("todos", JSON.stringify(todoArray))
appendTodo()
}

