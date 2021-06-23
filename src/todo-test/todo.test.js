const Task = require('../js/todo/todo');

describe('test if todo list functions are declared and working', () => {
  let taskObject;

  beforeAll(() => {
    taskObject = new Task('HELLO', 'hi how are you', 'high', Date.now());
  });

  test('should create a task object', () => {
    const task = {
      title: 'The winds of winter',
      description: 'First page',
      priority: 'low',
      completed: false,
    };
    expect(new Task(task)).toEqual({
      title: 'The winds of winter',
      description: 'First page',
      priority: 'low',
      completed: false,
    });
  });

  test('test to see if a task is updated', () => {
    expect(taskObject.update).toBeTruthy();
  });

  test('test to check if project complete-toggle works ', () => {
    expect(taskObject.toggleCompleted).toBeTruthy();
  });
});
