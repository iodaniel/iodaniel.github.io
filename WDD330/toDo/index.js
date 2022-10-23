class TodoItem {
    constructor(task) {
        this.id = Date.now();
        this.content = task;
        this.completed = false;
    }
}

function addTodo() {
    var todo_Entry = document.getElementById("todo_Entry").value;
    
    if (todo_Entry !== '') {
        saveEntry(todo_Entry);
    } else {
        showError();
    }
    document.getElementById("todo_Entry").value = '';
}

function displayEntry(todo) {

    var todo_Item_Div = document.createElement('div');
    todo_Item_Div.setAttribute('class', 'todoItem');
    todo_Item_Div.setAttribute('id', todo.id)
    //this code will provide the icon inside of a span tag
    var spanIconBox = document.createElement("span");
    spanIconBox.setAttribute('class', 'material-icons');
    spanIconBox.innerText = "check_box_outline_blank";
    spanIconBox.setAttribute("id", "iconFor"+todo.id)
    spanIconBox.myParam = todo.id;
    // this code is the task div
    var taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task');
    taskDiv.innerText = todo.content;
    // this code will add the span tag and inside a remove icons
    const removeBtn = document.createElement('span');
    removeBtn.setAttribute('class', 'material-icons');
    removeBtn.innerText = "remove_circle";
    removeBtn.addEventListener('click', deleteTask, false);
    removeBtn.myParam = todo.id;
    
    if (todo.completed){
        todo_Item_Div.classList.add("completed");
        spanIconBox.innerText = "check_box";
    } else {
        spanIconBox.addEventListener('click', completeTask, false);
    }
    
    todo_Item_Div.appendChild(spanIconBox);
    todo_Item_Div.appendChild(taskDiv);
    todo_Item_Div.appendChild(removeBtn);

    document.getElementsByClassName('todoList')[0].appendChild(todo_Item_Div);
}
async function completeTask(evt) {

    document.getElementById(evt.currentTarget.myParam).classList.add("completed");
    document.getElementById("iconFor"+evt.currentTarget.myParam).innerText = "check_box";
    const entries = await getEntries();
    
   const stutus = entries.findIndex(entry => entry.id === evt.currentTarget.myParam);
    entries[stutus].completed = true

    localStorage.setItem('testC', JSON.stringify(entries));
}

async function deleteTask(evt) {
    document.getElementById(evt.currentTarget.myParam).remove();

    const entries = await getEntries();
    const deleteable = entries.find(entry => entry.id === evt.currentTarget.myParam);
    const updatedTasks = entries.filter(entry => entry !== deleteable);

    localStorage.setItem('testC', JSON.stringify(updatedTasks));
}

async function saveEntry(entry) {

    var entries = await getEntries();
    var todo_Entry = new TodoItem(entry);

    displayEntry(todo_Entry, "all");
    entries.push(todo_Entry);
    console.log(entries);

    localStorage.setItem('testC', JSON.stringify(entries));
}

async function getEntries() {
    var entries = await JSON.parse(localStorage.getItem('testC'));
    if (entries !== null) {
        return entries;
    } else {
        entries = [];
        return entries;
    }
}

async function startUp() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';

    var todos = await getEntries();
    displayCount(todos.filter(item => item.completed === false).length);

    if (todos !== null) {
        todos.forEach(todo => {
            displayEntry(todo);
        });
    } else {
        //display message to the todo list
    }

}
// this function display the count of task entries
function displayCount(count) {

    const taskCount = document.getElementsByClassName('count')[0];
    taskCount.innerHTML = '';

    if (count === 1) {
        taskCount.innerText = count + " Task Left"
    } else {
        taskCount.innerText = count + " Pending Task Left!"
   }
}

function showError() {
    document.getElementById('error').innerText = "You need to add a task"
    setTimeout(function(){ document.getElementById('error').innerText = '' }, 3000);
}

async function activeTodos() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';
    var todos = await getEntries();
    displayCount(todos.filter(item => item.completed === false).length);

    if (todos !== null) {
        todos.filter(todo => todo.completed === false)
        .forEach(todo => {
            displayEntry(todo);
        });
    }
}

async function completedTodos() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';
    var todos = await getEntries();
    
    displayCount(0);

    if (todos !== null) {
        todos.filter(todo => todo.completed === true)
        .forEach(todo => {
            displayEntry(todo);
        });
    }
}
startUp();