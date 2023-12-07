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
      console.log("Index out of bound");
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

const myTodo = new Todo();
myTodo.add("HELOO Wordl");
// myTodo.add("HELOO Wordl");
// myTodo.add("HELOO Wordl");

// myTodo.remove(3);
// myTodo.remove(1);
// myTodo.update(2, "I'm Hafizur Rahman");
console.log(myTodo.get());
// myTodo.clear()
console.log(myTodo.getAll());

module.exports = Todo;
