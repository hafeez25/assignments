/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  tasks = [];
  constructor() {}
  add(task) {
    this.tasks.push(task);
  }
  getAll() {
    return this.tasks;
  }
  remove(index) {
    this.tasks.splice(index, 1);
  }
  update(index, newTask) {
    if (index >= this.tasks.length) {
      return;
    }
    this.tasks[index] = newTask;
  }
  get(index) {
    if (index < this.tasks.length) {
      return this.tasks[index];
    }
    return null;
  }
  clear() {
    this.tasks.splice(0);
  }
}

module.exports = Todo;
