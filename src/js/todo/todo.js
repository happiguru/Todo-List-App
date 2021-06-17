import { format } from 'date-fns';
import * as Observer from '../asset/observer';

export default class Task {
  constructor(params) {
    this.title = params.title;
    this.description = params.description;
    this.priority = params.priority;
    if (params.dueDate) this.dueDate = new Date(params.dueDate);
    this.completed = params.completed || false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
    Observer.omit('updateProject');
  }

  update(params) {
    this.title = params.title;
    this.description = params.description;
    this.priority = params.priority;
    if (params.dueDate) this.dueDate = new Date(params.dueDate);
    this.completed = params.completed;
    Observer.omit('updateProject');
  }

  get dueDateFormatted() {
    return this.dueDate ? format(this.dueDate, 'M/d/yy') : '';
  }

  get dueDateString() {
    return this.dueDate ? format(this.dueDate, 'yyy-MM-dd') : '';
  }

  get sortedTitle() {
    return this.title.toLowerCase();
  }

  get sortedDueDate() {
    return this.dueDate ? this.dueDate : Infinity;
  }

  get sortedPriority() {
    switch (this.priority) {
      case 'low':
        return 3;
      case 'medium':
        return 2;
      default:
        return 1;
    }
  }
}