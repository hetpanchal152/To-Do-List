const input = document.getElementById('new-todo');
const button = document.getElementById('add-todo');
const list = document.getElementById('todo-list');

button.addEventListener('click', function() {
  const newItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  label.textContent = input.value;
  deleteButton.textContent = 'Delete';

  newItem.appendChild(checkbox);
  newItem.appendChild(label);
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);

  input.value = '';
});

list.addEventListener('change', function(event) {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    const item = event.target.parentNode;
    item.classList.toggle('completed');
    list.appendChild(item);

    const audio = new Audio('ding.mp3');
    audio.play();
  }
});

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const item = event.target.parentNode;
    item.classList.toggle('deleted');
    setTimeout(() => list.removeChild(item), 500);
    //list.removeChild(item);
  }
});
