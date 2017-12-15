/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 0
  return class Task {
    constructor(description, priority) {
      //your code here
      this.priority = priority
      this.description = description
      this.id = ++id
    }

    render(){

    }
  }

})()

function createTask(){
  event.preventDefault()
  let taskId = document.getElementById('parent-list').value
  let taskDescription = document.getElementById('new-task-description').value
  let taskPriority = document.getElementById('new-task-priority').value
  let newTask = new Task(taskDescription, taskPriority)

  lists.forEach(element => {
    if(element.id === parseInt(taskId)){
      element.tasks.push(newTask)
    }
  })

  let itemDiv = document.getElementById(`div ${taskId}`)
  let anyEl = document.createElement('div')
  anyEl.innerHTML += (`Task description: ${taskDescription } <br><br> Task priority: ${taskPriority}`)
  itemDiv.append(anyEl)
}

let taskForm = document.getElementById('create-task-form')
taskForm.addEventListener("submit", createTask)
