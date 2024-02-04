//SELEÇÃO DE ELEMENTOS

const btnTodoAdd = document.querySelector('.add-buttons .submit')
const todoInput = document.querySelector('#input-add-todo');
const cancalAddBtn = document.querySelector('.cancel-add');

const todoList = document.querySelector('.todo-list');


const editAdd = document.querySelector('.add-buttons .edit-tarefa');
const cancelEditBtn = document.querySelector('.cancel-edit');
//const btnEditTodo = document.querySelectorAll('.todo-list .icon .btn-edite-todo');


//FUNÇÕES

const saveTodo = (text) =>{
    const todo = document.createElement('div');
    todo.classList.add("list");
    
    const todoTitle = document.createElement('h3');
    todoTitle.innerHTML = text;
    todo.appendChild(todoTitle);

    console.log(todo);
}

//EVENTOS
btnTodoAdd.addEventListener('click', (e) =>{
    e.preventDefault();

    const inputValue = todoInput.value;
    
    if(inputValue === '') {
        alert("Por favor, insira um texto para a tarefa!");
    } else {
        saveTodo(inputValue)
    }
    

});