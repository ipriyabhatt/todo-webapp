// script.js
document.getElementById('add-btn').addEventListener('click', function() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText) {
    const todoList = document.getElementById('todo-list');
    const listItem = createTaskListItem(todoText);
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
});

function createTaskListItem(taskText) {
  const listItem = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  const label = document.createElement('label');
  label.textContent = taskText;

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'material-icons';
  deleteIcon.textContent = 'delete';
  deleteIcon.addEventListener('click', function() {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteIcon);

  return listItem;
}
// script.js
// ... existing code ...

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});
