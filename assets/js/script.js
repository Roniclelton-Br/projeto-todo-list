//SELEÇÃO DE ELEMENTOS
const areaTodoAdd = document.querySelector('.todo-container .add-todo');
const areaTodoEdit = document.querySelector('.todo-container .edite-todo');

const btnTodoAdd = document.querySelector('.add-buttons .submit')
const todoInput = document.querySelector('#input-add-todo');
const cancalAddBtn = document.querySelector('.cancel-add');

const editInput = document.querySelector('.edite-todo input');

const todoList = document.querySelector('.todo-list');


const editAdd = document.querySelector('.add-buttons .edit-tarefa');

const cancelEditBtn = document.querySelector('.cancel-edit');

let oldInputValue;

//FUNÇÕES
//ADICIONANDO A TAREFA NA LISTA
const saveTodo = (text) =>{
    const todo = document.createElement('div');
    todo.classList.add("list");
    
    const todoTitle = document.createElement('h3');
    todoTitle.innerHTML = text;
    todo.appendChild(todoTitle);

    const icons = document.createElement('div'); 
    icons.classList.add('icon');

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn-check-todo');
    checkBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    icons.appendChild(checkBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn-edite-todo');
    editBtn.innerHTML = '<i class="bi bi-pen"></i>';
    icons.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-eraser-todo');
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    icons.appendChild(deleteBtn);

    todo.appendChild(icons);

    todoList.appendChild(todo)

    todoInput.value = '';
    todoInput.focus();
}

function toggleInput(){
    areaTodoAdd.classList.toggle('hide');
    areaTodoEdit.classList.toggle('hide');
    todoList.classList.toggle('hide');
};

const updateTodo = (text) =>{
    const todos = document.querySelectorAll('.list');

    todos.forEach((todo)=>{
        let todoTitle = document.querySelector('h3');
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    })
}

//EVENTOS
//EVENTO PARA QUANDO O INPUT ESTIVER VAZIO
btnTodoAdd.addEventListener('click', (e) =>{
    e.preventDefault();

    const inputValue = todoInput.value;
    
    if(inputValue === '') {
        alert("Por favor, insira um texto para a tarefa!");
    } else {
        saveTodo(inputValue)
    }
    

});
//EVENTO DE CANCELAR A TAREFA DO INPUT.
cancalAddBtn.addEventListener('click', ()=>{
    todoInput.value = '';
});

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('.list');
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if(targetEl.classList.contains('btn-check-todo')){
        parentEl.classList.toggle('done')
    }
    if(targetEl.classList.contains('btn-eraser-todo')){
        parentEl.remove();
    }
    if(targetEl.classList.contains('btn-edite-todo')) {
        toggleInput();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    toggleInput();
});

editAdd.addEventListener('click', (e)=>{
    e.preventDefault();

    const editInputValue = editInput.value;
    if(editInputValue) {
        updateTodo(editInputValue);
    }

    toggleInput();
})