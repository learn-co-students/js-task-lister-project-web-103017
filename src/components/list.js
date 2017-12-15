/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 0
  return class List {
    constructor(title) {
      //your code here
      this.id = ++id
      this.tasks = []
    }

    render(){

    }
  }

})()

let listForm = document.getElementbyId("create-task-form")

listForm.addEventListener("submit", function(){
  event.preventDefault()
})
