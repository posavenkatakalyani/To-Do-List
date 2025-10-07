const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const searchInput = document.getElementById('search');


todoInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = todoInput.value.trim();
    if (val !== '') {
      addTodo(val);
      todoInput.value = '';
    }
  }
});


function addTodo(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);

  const delBtn = document.createElement('button');
  delBtn.textContent = '×'; 
  delBtn.classList.add('delete-btn');
  delBtn.title = "Delete task";
  li.appendChild(delBtn);

  todoList.appendChild(li);

  
  delBtn.addEventListener('click', () => {
    li.remove();
  });
}


searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const items = todoList.querySelectorAll('li');
  items.forEach(item => {
    const text = item.firstChild.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? '' : 'none';
  });
});
