/* sophisticated_code.js */

// This code is an implementation of a task management system using JavaScript

// Importing necessary libraries
const readline = require('readline-sync');
const moment = require('moment');

// Defining the Task class
class Task {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  toString() {
    return `${this.title}:
    Description: ${this.description}
    Priority: ${this.priority}
    Created At: ${this.createdAt}
    Completed: ${this.completed ? 'Yes' : 'No'}`;
  }
}

// Defining the TaskList class
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask() {
    const title = readline.question('Enter task title: ');
    const description = readline.question('Enter task description: ');
    const priority = readline.questionInt('Enter task priority (1-5): ');

    const task = new Task(title, description, priority);
    this.tasks.push(task);

    console.log('Task added successfully!');
  }

  completeTask() {
    console.log('Tasks List:');
    this.printAllTasks();

    const taskId = readline.questionInt('Enter the task ID to mark as completed: ');

    if (taskId <= 0 || taskId > this.tasks.length) {
      console.log('Invalid task ID!');
      return;
    }

    const task = this.tasks[taskId - 1];
    task.markAsCompleted();

    console.log(`Task "${task.title}" marked as completed!`);
  }

  printAllTasks() {
    if (this.tasks.length === 0) {
      console.log('No tasks found!');
    } else {
      this.tasks.forEach((task, index) => {
        console.log(`\nID: ${index + 1}`);
        console.log(task.toString());
        console.log('--------------------------------------------------');
      });
    }
  }
}

// Creating a new task list
const taskList = new TaskList();

// Main program loop
let exitFlag = false;
while (!exitFlag) {
  console.log('\nTASK MANAGEMENT SYSTEM');
  console.log('1. Add Task');
  console.log('2. Complete Task');
  console.log('3. List Tasks');
  console.log('4. Exit');

  const choice = readline.questionInt('Enter your choice (1-4): ');

  switch (choice) {
    case 1:
      taskList.addTask();
      break;
    case 2:
      taskList.completeTask();
      break;
    case 3:
      taskList.printAllTasks();
      break;
    case 4:
      exitFlag = true;
      console.log('Exiting the Task Management System. Goodbye!');
      break;
    default:
      console.log('Invalid choice! Please try again.');
  }
}

// End of code