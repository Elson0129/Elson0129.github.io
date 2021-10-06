document.addEventListener('DOMContentLoaded', function() {
  var tasks = [];
  document.querySelector("#new-task-form").onsubmit = function() {
    const li = document.createElement('li');

    let task_text = document.querySelector('#task').value;
    let task_priority = document.querySelector('#task-priority').value;
    let task_status_input = document.querySelectorAll('[name=task-status]');
    var task_status;

    for(let i = 0; i < task_status_input.length; i++){
      if(task_status_input[i].checked){
        task_status = task_status_input[i].value;
      }
    }

    let new_task_html = `
                        <div class="new-task-content">
                        <span> <u>${task_text}</u> </span> <br> <span>Task Priority: <b style="text-transform: uppercase;">${task_priority} </b></span> <br> <span> Status: <b style="text-transform: capitalize;">${task_status}</b> </span> </div>
                        <button class="complete-task-btn"> Complete Task </button> <button class="remove-task-btn"> Remove Task </button>
                        `;
    li.innerHTML = new_task_html
    tasks.push(task_text);

    document.querySelector("#tasks-list").append(li);
    document.querySelector("#task").value = '';

    return false;
  }

  document.addEventListener('click', function(event){
    element = event.target;
    if(element.className === 'remove-task-btn') {
      element.parentElement.remove();
    }
    if(element.className === 'complete-task-btn' || element.className === 'completed'){
      element.parentElement.querySelector('.new-task-content').style.textDecoration = 'line-through';
    }
  })

});
