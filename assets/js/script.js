//SELEÇÃO DE ELEMENTOS

const btnTodoAdd = document.querySelector('.add-buttons .submit')
const todoInput = document.querySelector('#input-add-todo');
const cancalAddBtn = document.querySelector('.cancel-add');

const todoList = document.querySelector('.todo-list');


const editAdd = document.querySelector('.add-buttons .edit-tarefa');
const cancelEditBtn = document.querySelector('.cancel-edit');
//const btnEditTodo = document.querySelectorAll('.todo-list .icon .btn-edite-todo');


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
// function heightTodoList(){
//     if(todoList.children = 3) {
//         todoList.style.height = 'auto';
//         todoList.style.overflowY = 'auto';
//     }else {
//         todoList.style.height = '150px';
//         todoList.style.overflowY= 'scroll';
//     }

// }
// heightTodoList()

function toggleInput(){
    
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

    if(targetEl.classList.contains('btn-check-todo')){
        parentEl.classList.toggle('done')
    }
    if(targetEl.classList.contains('btn-eraser-todo')){
        parentEl.remove();
    }
    if(targetEl.classList.contains('btn-edite-todo')) {
        toggleInput();

    }
});

