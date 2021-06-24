const Task = require('../js/todo/todo');

describe('test if todo list functions are declared and working', () => {
  let taskObject;
  const task = {
    title: 'The winds of winter',
    description: 'First page',
    priority: 'low',
    completed: false,
  };

  const emptytask = {
    title: '',
    description: '',
    priority: '',
    completed: false,
  };

  // beforeAll(() => {
  //   taskObject = new Task();
  // });

  test('should create a task object', () => {
    expect(new Task(task)).toEqual({
      title: 'The winds of winter',
      description: 'First page',
      priority: 'low',
      completed: false,
    });
  });

  test('test to see if a task is updated or not', () => {
    taskObject = new Task(emptytask);
    expect(taskObject.update).toBeTruthy();
  });

  test('test to see if a task is updated', () => {
    expect(taskObject.update).toBeTruthy();
  });

  test('test to check if project complete-toggle works ', () => {
    expect(taskObject.toggleCompleted).toBeTruthy();
  });
});
