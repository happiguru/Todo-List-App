import * as Observer from '../asset/observer';
import Task from '../todo/todo';

export default class Project {
  constructor(params) {
    this.title = params.title;
    this.description = params.description;
    this.tasks = params.tasks ? params.tasks : [];
  }

  addTodo(task) {
    if (task !== {}) {
      this.tasks.push(task);
      Observer.omit('updateProject');
    }
    return 'cannot store empty task';
  }

  removeTodo(index) {
    this.tasks.splice(index, 1);
    Observer.omit('updateProject');
  }

  update(params) {
    this.title = params.title;
    this.description = params.description;
    Observer.omit('updateProject');
  }

  randomTodo() {
    if (this.tasks.length === 0) {
      return new Task({
        title: 'Create a todo for this Project',
        description: `${this.title} isn't much of a project without any Todos...`,
        dueDate: Date.now(),
        priority: 'high',
      });
    }
    const index = Math.floor(this.tasks.length * Math.random());
    return this.tasks[index];
  }
}

module.exports = Project;