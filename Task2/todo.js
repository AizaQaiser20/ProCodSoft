document.querySelector('#push').onclick = function() {
    if (document.querySelector('#taskInput').value.length == 0) {
      alert("Please enter the task");
    } else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span class="taskname">
            ${document.querySelector('#taskInput').value}
          </span>
          <button class="edit">
            <i class="fa fa-edit fa-lg"></i>
          </button>
          <button class="delete">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </div>
      `;
      var current_tasks = document.querySelectorAll(".delete");
      var edit_tasks = document.querySelectorAll(".edit");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
          this.parentNode.remove();
        };
        edit_tasks[i].onclick = function() {
          var taskText = this.parentNode.querySelector('.taskname').textContent;
          var newTaskText = prompt("Edit task:", taskText);
          if (newTaskText !== null) {
            this.parentNode.querySelector('.taskname').textContent = newTaskText;
          }
        };
      }
      document.querySelector('#taskInput').value = '';
    }
  };
  