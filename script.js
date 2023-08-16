// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.querySelector("#button");
//   const inputField = document.querySelector("#inputField");
//   const taskList = document.querySelector("#list");

//   addButton.addEventListener("click", function () {
//     const newTaskText = inputField.value.trim();

//     if (newTaskText) {
//       const newTaskItem = document.createElement("li");
//       newTaskItem.textContent = newTaskText;
//       taskList.appendChild(newTaskItem);
//       inputField.value = "";
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#button");
  const inputField = document.querySelector("#inputField");
  const taskList = document.querySelector(".tasks ul");

  addButton.addEventListener("click", function () {
    const newTaskText = inputField.value.trim();

    if (newTaskText) {
      const newTaskItem = document.createElement("li");
      newTaskItem.innerHTML = `<input type="checkbox">${newTaskText}`;
      taskList.appendChild(newTaskItem);
      inputField.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      const listItem = event.target.parentNode;
      taskList.removeChild(listItem);
    }
  });
});
