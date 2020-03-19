const formList = document.querySelector(".form-list");
const list = document.querySelector(".list");
const listItems = document.getElementsByTagName("label");
const addButton = document.querySelector(".add");
const inputBox = document.querySelector("#todo-item");
let addedTodos = 0;

addButton.addEventListener("click", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  addedTodos++;
  const template = document.querySelector("#todoTemplate");
  const domFrag = template.content.cloneNode(true);
  const todo = domFrag.querySelector(".todo");
  const todoLabel = domFrag.querySelector("label");
  const todoInput = domFrag.querySelector(".todo__checkbox");
  const err = document.createElement("p");
  let message = document.createTextNode("Error: please write something");
  todoLabel.htmlFor = `todo-number-${addedTodos}`;
  todoInput.id = `todo-number-${addedTodos}`;

  let userInput = inputBox.value;

  if (userInput) {
    domFrag.querySelector(".todo__text").textContent = userInput;
    if (formList.childElementCount === 3){
      formList.removeChild(formList.childNodes[formList.childNodes.length-1]);
    }
    todo.addEventListener("click", event => {
      if (event.target.tagName === "INPUT") {
        todoLabel.classList.toggle("todo__text--done");
      }
    });

    list.appendChild(domFrag);

    inputBox.value = "";
  } 
  else if(formList.childElementCount == 2) {
    err.appendChild(message);
    formList.appendChild(err);
  }
}
