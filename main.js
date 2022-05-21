const taskValue = document.getElementById('task_value');
const taskSubmit = document.getElementById('task_submit');
const taskList = document.getElementById('task_list');
const taskDate = document.getElementById('task_date');
const taskImportant = document.getElementById('task_important');

// function addElement(){
//   const element = document.createElement('span');
//   element.isContentEditable = "aaa";
//   element.onclick = function(){
//     element.innerHTML = "クリックされた！";
//   };
//   const parent = document.getElementById('parent');
//   parent.appendChild(element);
//   parent.appendChild(document.createElement('br'));

// }

const addTasks = (task, date, important) => {
  const listItem = document.createElement('li');
  const listDate = document.createElement('span');
  const listImportant = document.createElement('span');

  const showItem = taskList.appendChild(listItem);
  const showDate = taskList.appendChild(listDate);
  const showImportant = taskList.appendChild(listImportant);

  showItem.innerHTML = task;
  showDate.innerHTML = date;
  showImportant.innerHTML = important;
  
  // const deleteDate = listDate;
  listItem.appendChild(listDate);
  listItem.appendChild(listImportant);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);


  // const date

  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
    deleteTasks(listDate);
    deleteTasks(listImportant);
  });
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  const chosenDate = deleteButton.closest('span');
  taskList.removeChild(chosenTask);
  taskList.removeChild(chosenDate);
};

taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskValue.value;
  const date = taskDate.value;
  const important = taskImportant.value;
  addTasks(task, date, important);
  taskValue.value = '';
  taskImportant.value = '';
  // taskDate.value = '';
});