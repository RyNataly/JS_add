
const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

let toDoData = []

const render = function() {
  todoList.innerHTML = ''
  todoCompleted.innerHTML = ''

  toDoData.forEach(function (item) {
      const li = document.createElement('li')
      li.classList.add('todo-item')
      li.innerHTML = '<span class="text-todo">' + item.text +'</span>' +
          '<div class="todo-buttons">' +
          '<button class="todo-remove"></button>' +
          '<button class="todo-complete"></button>' +
          '</div>'

      if (item.text !== ''){
          if (item.completed) {
              todoCompleted.append(li)
          } else {
              todoList.append(li)
          }
        } 

      li.querySelector('.todo-complete').addEventListener('click', function() {
          item.completed = !item.completed
          render()
      })
      li.querySelector('.todo-remove').addEventListener('click', function() {
          item.text = '';
          render()
      })
  })

  const index = toDoData.findIndex(n => n.text === '');
  if (index !== -1) {
    toDoData.splice(index, 1);
  }

  // localStorage.setItem('toDO', JSON.stringify(toDoData)) 
  setData('toDo', toDoData);
  // console.log(JSON.stringify(toDoData))
}

todoControl.addEventListener('submit', function (event){
    event.preventDefault()

    if (headerInput.value === '') {
        alert ('Введите текст задачи')
    }
    else {
        const newToDo = {
          text: headerInput.value,
          completed: false
        }

        toDoData.push(newToDo)
        headerInput.value = ''

        render()
    }
})

const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const start = function() {
    // let storage = localStorage.getItem('toDO')
    const storage = getData('toDo');
    if (storage !=='' && storage !== null){
        // toDoData = JSON.parse(storage)
        toDoData = storage
        render()
    }
}

start()
