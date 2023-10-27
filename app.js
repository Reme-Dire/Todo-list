document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('add');
    const taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        return;
      }
  
      const li = document.createElement('li');
      li.innerHTML = `<span>${taskText}</span><button class="delete">Delete</button>`;
      taskList.appendChild(li);
  
      taskInput.value = '';
  
      li.querySelector('.delete').addEventListener('click', function () {
        taskList.removeChild(li);
      });
    });
  
    taskInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        addButton.click();
      }
    });
  });
  