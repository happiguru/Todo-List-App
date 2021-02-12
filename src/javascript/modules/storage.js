import ProjectPrototype from './project_prototype';
import ProjectTask from './tasks';
import TodoListObject from './todolistobject';

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static getTodoList(){
        const todoList = Object.assign(
            new TodoListObject(),
            JSON.parse(localStorage.getItem('todoList')),
        );

        todoList.setTodoLists(
            todoList.getTodoLists().map((project) => Object.assign(new ProjectPrototype(), project)),
        );

        todoList.getTodoLists().forEach((project) => project.setTaskName(
            project.getTaskName().map((task) => Object.assign(new ProjectTask(), task)),
        ),
        );
        return todoList;
    }

    static addProject(project){
        const todolistobject = Storage.getTodoList();
        todolistobject.addProject(project);
        Storage.saveTodoList(todolistobject);
    }

    static destroyProject(project_name) {
        const todoList = Storage.getTodoList();
        todoList.destroyProject(project_name);
        Storage.saveTodoList(todoList);
    }

    static addTask(project_name, task) {
        const todoList = Storage.getTodoList();
        todoList.getProject(project_name).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static destroyTask(project_name, taskName){
        const todoList = Storage.getTodoList();
        todoList.getProject(project_name).destroyTask(taskName);
        Storage.saveTodoList(todoList);
    }

    static renameTask(project_name, taskName, newTaskName){
        const todoList = Storage.getTodoList();
        todoList.getProject(project_name).getTaskName(taskName).setTaskName(newTaskName);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(project_name, taskName, newDueDate){
        const todoList = Storage.getTodoList();
        todoList.getProject(project_name).getTaskName(taskName).setTaskDate(newDueDate);
        Storage.saveTodoList(todoList);
    }

    static updateTodayProject(){
        const todoList = Storage.getTodoList();
        todoList.updateTodayProject();
        Storage.saveTodoList(todoList);
    }

    static updateWeekProject(){
        const todoList = Storage.getTodoList();
        todoList.updateWeekProject();
        Storage.saveTodoList(todoList);
    }
}