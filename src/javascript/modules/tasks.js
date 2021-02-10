export default class ProjectTask{
    constructor(taskName, dueDate = 'No date'){
        this.taskName = taskName;
        this.dueDate = dueDate;
    }

    setTaskName(taskName){
        this.taskName = taskName;
    }

    getTaskName() {
        return this.taskName;
    }

    setDate(dueDate){
        this.dueDate = dueDate;
    }

    getDate(){
        return this.dueDate;
    }

    getDateFormatted(){
        const day = this.dueDate.split('/')[0];
        const month = this.dueDate.split('/')[1];
        const year = this.dueDate.split('/')[2];
        return `${month}/${day}/${year}`;
    }
}