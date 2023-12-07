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
    this.tasks[index] = newTask;
  }
  get(index) {
    return this.tasks[index];
  }
  clear() {
    this.tasks.splice(0);
  }
}

const myTodo = new Todo();
myTodo.add("HELOO Wordl");
myTodo.add("HELOO Wordl");
myTodo.add("HELOO Wordl");

myTodo.remove(1);
myTodo.remove(1);
myTodo.update(0, "I'm Hafizur RAhman");
myTodo.clear();
console.log(myTodo.getAll());

module.exports = Todo;
