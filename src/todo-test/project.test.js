const Project = require('../js/project/project');

describe('Add a new Project', () => {
  let projectObject;

  const emptytask = {};

  beforeAll(() => {
    projectObject = new Project('New Project', 'Personal');
  });

  test('should create a project object', () => {
    const item = {
      title: 'The winds of winter',
      description: 'First page',
      tasks: Array,
    };
    expect(new Project(item)).toEqual({
      title: 'The winds of winter',
      description: 'First page',
      tasks: Array,
    });
  });

  test('should add task to project', () => {
    expect(projectObject.addTodo).toBeTruthy();
  });

  test('should check if an empty task can be added to project', () => {
    const result = projectObject.addTodo(emptytask);
    expect(result).toBeTruthy();
  });

  test('should check if update project task works', () => {
    expect(projectObject.update).toBeTruthy();
  });

  test('should delete an item when index is given', () => {
    expect(projectObject.removeTodo).toBeTruthy();
  });
});
