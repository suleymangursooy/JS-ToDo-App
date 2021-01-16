'use strict'

// get todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todoJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
}

// Savetodos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id ===id);

    if(index > -1){
        todos.splice(index,1);
    }
    return todos;
}

const generateTodoDOM = (todos) =>{
    todos.forEach((todos) => {
        
        const todoElement = document.createElement('label');
        const containerEl = document.createElement('div');
        const checkbox = document.createElement('input');
        const removeButton = document.createElement('button');
        const todoText = document.createElement('span');

        // setup container
        containerEl.classList.add('list-item__container');
        todoElement.classList.add('list-item');
        todoElement.appendChild(containerEl);

        // create checkbox
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = todo.completed;
        containerEl.appendChild(checkbox);
        checkbox.addEventListener('change', (e) => {
            todo.completed = e.target.checked;
            saveTodos(todos);
            renderTodos(todos, filters);
        })

        // create text content for the todo
        todoText.textContent = todo.text;
        containerEl.appendChild(todoText);

        // create remove button
        removeButton.textContent = 'remove';
        removeButton.classList.add('button', 'button--text');
        todoElement.appendChild(removeButton);
        removeButton.addEventListener('click', () =>{
            todos = removeTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos, filters);
        })

        document.querySelector('#todos').appendChild(todoElement);
    })
}