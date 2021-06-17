const form = document.querySelector('.view-todo');

function clear() {
  form.classList.add('hidden');
  form.innerHTML = '';
}

export default function display(task, tagline) {
  clear();

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('value', task.title);
  title.classList.add('form-line');

  const description = document.createElement('textarea');
  description.placeholder = 'Description...';
  description.value = task.description;
  description.classList.add('form-line');

  const dateContainer = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Deadline';
  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.value = task.dueDateString;
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(dueDate);

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('form-line');

  const priorityContainer = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  const priority = document.createElement('select');
  const option1 = document.createElement('option');
  option1.value = 'low';
  option1.text = 'low';
  const option2 = document.createElement('option');
  option2.value = 'medium';
  option2.text = 'medium';
  const option3 = document.createElement('option');
  option3.value = 'high';
  option3.text = 'high';
  priority.add(option1);
  priority.add(option2);
  priority.add(option3);
  priority.selectedIndex = ['low', 'medium', 'high'].findIndex(
    (el) => el === task.priority
  );
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priority);

  const isCompleteContainer = document.createElement('div');
  const isCompleteLabel = document.createElement('div');
  isCompleteLabel.textContent = 'Completed?';
  const completed = document.createElement('input');
  completed.setAttribute('type', 'checkbox');
  completed.checked = task.completed;
  isCompleteContainer.appendChild(isCompleteLabel);
  isCompleteContainer.appendChild(completed);

  inputContainer.appendChild(dateContainer);
  inputContainer.appendChild(priorityContainer);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('form-line');

  const exit = document.createElement('button');
  exit.textContent = 'Exit';

  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Submit');

  buttonContainer.appendChild(isCompleteContainer);
  buttonContainer.appendChild(exit);
  buttonContainer.appendChild(submit);

  if (tagline) {
    form.appendChild(tagline);
    form.classList.add('random-todo-mode');
  }

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(inputContainer);
  form.appendChild(buttonContainer);

  form.classList.remove('hidden');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    task.update({
      title: title.value,
      description: description.value,
      dueDate: `${dueDate.value}T00:00:00`,
      priority: priority.value,
      completed: completed.checked,
    });
    clear();
  });

  exit.addEventListener('click', clear);
}