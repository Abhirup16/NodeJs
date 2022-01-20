const tasks = {
    taskso: [{
        text: 'Grocery shopping',
        completed: true
    },
    {text: 'Clean yard',
    completed: false},
{
    text: 'bubu',
    completed: false
}],
    getTasksToDo() {
       return this.taskso.filter((task)=>{task.completed===false})
       }
    
}
console.log(tasks.getTasksToDo())