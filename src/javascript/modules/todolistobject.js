import { compareAsc, toDate } from 'date-fns';
import ProjectPrototype from './project_prototype';
import ProjectTask from './tasks';

export default class TodoListObject {
    constructor(){
        this.projects = [];
        this.projects.push(new ProjectPrototype('Inbox'));
        this.projects.push(new ProjectPrototype('Today'));
        this.projects.push(new ProjectPrototype('This week'));
    }

    setTodoLists(projects){
        this.projects = projects;
    }

    getTodoLists(){
        return this.projects;
    }

    getTodoList(projectName){
        return this.projects.find((project) => project.getProjectName() === projectName);
    }

    verify(projectName){
        return this.projects.some((project) => project.getProjectName() === projectName);
    }

    addTodoList(project){
        if(this.projects.indexOf(project) > 0) return;
        this.projects.push(project);
    }

    destroyTodoList(projectName){
        const todolistToDestroy = this.projects.find(
            (project) => project.getProjectName() === projectName
        );
        this.projects.splice(this.projects.indexOf(todolistToDestroy), 1);
    }

    updateTodayList(){
        this.getTodoList('Today').tasks = [];

        this.projects.forEach((project) => {
            if(project.getProjectName() === 'Today' || project.getProjectName() === 'This week')
            return;

            const todayTasks = project.getTasksToday();
            todayTasks.forEach((task) => {
                const taskName = `${task.getProjectName()} (${project.getProjectName})`;
                this.getTodoList('Today').addTask(new ProjectTask(taskName, task.getDate()));
            });
        });
    }

    updateWeekList(){
        this.getTodoList('This week').tasks = [];

        this.projects.forEach((project) => {
            if(project.getProjectName() === 'Today' || project.getProjectName() === 'This week')
            return;

        const weekTasks = project.getTasksThisWeek();
        weekTasks.forEach((task) => {
            const taskName = `${task.getProjectName()} (${project.getProjectName()})`;
            this.getTodoList('This week').addTask(
                new ProjectTask(taskName, task.getDate()),
            );

        });  
       });

       this.getTodoList('This week').setTasks(
           this.getTodoList('This week')
           .getAllProjectTask()
           .sort((taskX, taskY) => 
            compareAsc(
                toDate(new Date(taskX.getDateFormatted())),
                toDate(new Date(taskY.getDateFormatted())),
            ),
           ),
       );
    }
}