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
