import { toDate, isToday, isThisWeek, subDays } from 'date-fns';

export default class ProjectPrototype {
    constructor(project_name) {
        this.project_name = project_name;
        this.tasks = [];
    }

    setProjectName(project_name){
        this.project_name = project_name;
    }

    getProjectName(){
        return this.project_name;
    }

    setEachProjectTask(tasks){
        this.tasks = tasks;
    }

    getProjectTask(taskName){
        return this.tasks.find((task) => task.getProjectName() === taskName);
    }

    verifyTaskName(taskName){
        return this.tasks.some((task) => task.getProjectName() === taskName);
    }

    addTask(task){
        if(this.tasks.indexOf(task) > 0) return;
        this.tasks.push(task);
    }

    destroyTask(taskName){
        const taskToDestroy = this.tasks.find((task) => task.getProjectName() === taskName);
        this.tasks.splice(this.tasks.indexOf(taskToDestroy), 1);
    }

    getTasksToday(){
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isToday(toDate(taskDate));
        });
    }

    getTasksThisWeek(){
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isThisWeek(subDays(toDate(taskDate), 1));
        });
    }
}