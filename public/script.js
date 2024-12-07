document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});