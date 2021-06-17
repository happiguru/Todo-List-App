/* eslint-disable no-use-before-define */
import Task from './todo';
import { currentProject } from '../project/projectMan';

const newTodoButton = document.querySelector('.new-todo');
const todoForm = document.querySelector('.new-todo-form');
const formTitle = todoForm.querySelector('h1');
const cancelTodo = document.querySelector('.cancel-todo');

newTodoButton.addEventListener('click', toggleTodoForm);
todoForm.addEventListener('submit', addTodo);
cancelTodo.addEventListener('click', toggleTodoForm);

function toggleTodoForm(e) {
  e.preventDefault();
  formTitle.innerHTML = `New Todo for <i>${currentProject.title}</i>`;
  newTodoButton.classList.toggle('hidden');
  todoForm.classList.toggle('hidden');
}

function addTodo(e) {
  e.preventDefault();

  const task = new Task({
    title: this.querySelector('[name=title]').value,
    description: this.querySelector('[name=description]').value,
    dueDate: `${this.querySelector('[name=due-date]').value}T00:00:00`,
    priority: this.querySelector('[name=priority]').value,
  });
  currentProject.addTodo(task);
  this.reset();
  toggleTodoForm(e);
}
