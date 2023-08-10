document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".button");
  const inputField = document.querySelector("#inputField");
  const taskList = document.querySelector("#list");

  addButton.addEventListener("click", function () {
    const newTaskText = inputField.value.trim();

    if (newTaskText) {
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = newTaskText;
      taskList.appendChild(newTaskItem);
      inputField.value = "";
    }
  });
});
