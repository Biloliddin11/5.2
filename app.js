
const addButton = document.querySelector(".btn");
        const todoInput = document.querySelector(".inp");
        const todoList = document.querySelector(".todo-list");

        addButton.addEventListener('click', () => {
            const task = todoInput.value.trim();
            if (task) {
                const li = document.createElement('li');
                li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
                todoList.appendChild(li);
                todoInput.value = '';
            }
        });

        function deleteTask(button) {
            const li = button.parentElement;
            todoList.removeChild(li);
        }

        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addButton.click();
            }
        });