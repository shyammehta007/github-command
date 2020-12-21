const Task = require('./tasks.js')
class TaskList extends Map {
    addTask(details) {
        const task = new Task(details)
        const id = Date.now()
        this.set(id, task)
        return id
    }
    deleteTask(id) {
        this.delete(id)
    }
    updateTask(id, updates) {
        const task = this.get(id)
        task.updateDetails(updates)
    }
}

const taskList = new TaskList()

const id = taskList.addTask({ title: 'syam', description: 'null' })
console.log(taskList)
setTimeout(() => {
    taskList.updateTask(id, { title: 'ram' })
    console.log(taskList)
}, 2000)
// taskList.delete(id)
// console.log(taskList)

