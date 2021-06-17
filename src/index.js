/* eslint-disable no-use-before-define */
import './css/style.css';
import { add } from 'date-fns';
import Project from './js/project/project';
import Task from './js/todo/todo';
import './js/asset/controller';
import './js/asset/storage';
import * as ProjectsManager from './js/project/projectMan';
import * as Observer from './js/asset/observer';

const storedProjects = localStorage.getItem('projects');
if (storedProjects) {
  const projects = JSON.parse(storedProjects).map((project) => {
    // eslint-disable-next-line no-param-reassign
    project.tasks = project.todos.map((todo) => new Task(todo));
    return new Project(project);
  });
  ProjectsManager.load(projects);
} else {
  ProjectsManager.add(defaultProject());
}

function defaultProject() {
  const project = new Project({
    title: 'Welcome',
    description: 'Enjoy your todos!',
  });

  const a = new Task({
    title: 'Positive thinking',
    description:
      "Consider all the great things you'll accomplish with this Todo App",
    dueDate: add(Date.now(), { days: 1 }),
    priority: 'medium',
  });

  const b = new Task({
    title: 'Positive action',
    description:
      'Enjoy the feeling of accomplishment as you check off this Todo',
    dueDate: add(Date.now(), { days: 2 }),
    priority: 'high',
  });

  const c = new Task({
    title: 'Positive presence',
    description: 'Remember that the real Todo is the journey',
    dueDate: add(Date.now(), { days: 3 }),
    priority: 'low',
  });

  [a, b, c].forEach((todo) => project.addTask(todo));
  return project;
}

const index = localStorage.getItem('currentProjectIndex') || 0;
Observer.omit('assignCurrentProject', index);
Observer.omit('updateProject');