/*
list is responsible for creating a single list component
*/
let lists = []

const List = (() => {
  let id = 0
  return class List {
    constructor(title) {
      this.id = ++id
      this.title = title
      this.tasks = []
      lists.push(this)
    }

    render(){

    }

    addTask(task){
      this.tasks.push(task)
    }
  }

})()


function taskList(){
    event.preventDefault()
    let taskForm = document.getElementById("create-task-form")
    taskForm.style = 'visibility:visible;'
    let title = document.getElementById('new-list-title').value
    let list = new List(title)
    let divList = document.createElement('div')
    divList.className = `${list.id}`
    divList.id = `div ${list.id}`
    let section = document.getElementById("lists")
    section.appendChild(divList)
    divList.innerHTML = `<button id="button ${list.id}" class="delete-list ${list.id}">X</button><h2>${list.title}</h2>`
    let listSelect = document.getElementById('parent-list').innerHTML += `<option class="${list.id}" value="${list.id}">${list.title}</option>`
    let deleteButton = document.getElementById(`button ${list.id}`)
    deleteButton.addEventListener("click", function(){

      let singleLister = document.getElementsByClassName(`${list.id}`)
      divList.remove()
      for (let i = 0; i < singleLister.length; i++){
        singleLister[i].remove()
      }
      lists.forEach(element => {
        if (element.id === list.id) {
          lists.splice(lists.indexOf(element), 1)
        }
      })

    })



  }

let listForm = document.getElementById('create-list-form')

listForm.addEventListener("submit", taskList)
