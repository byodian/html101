function buildTodoItemEl(id, name) {
  const item = document.createElement('li')
  const span = document.createElement('span')
  const textContent = document.createTextNode(name)

  span.appendChild(textContent)

  item.id = id
  item.appendChild(span)
  item.appendChild(buildButtonEl(id))
  return item
}

function buildButtonEl(id) {
  const button = document.createElement('button')
  button.textContent = 'delete'
  button.id = id
  button.type = 'button'
  button.onclick = deleteItem
  return button
}

function renderTodoList(dom, state) {
  const frag = document.createDocumentFragment()
  state.tasks.forEach(task => {
    frag.appendChild(buildTodoItemEl(task.id, task.name))
  })

  dom.appendChild(frag)
}

function deleteItem(e) {
  console.log(typeof e.target.id)
  state.tasks = state.tasks.filter(task => task.id !== +e.target.id)
  document.querySelector('ul').innerHTML = ''
  renderTodoList(document.querySelector('ul'), state)
}

const state = {
  tasks: [
    {
      id: 1,
      name: 'b'
    },
    {
      id: 2,
      name: 'a'
    }
  ] 
}

renderTodoList(document.querySelector('ul'), state)