import { Component, input, signal } from "@angular/core";
import { Task } from "./task/task";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from "./task/task.model";

@Component({
  selector: "app-tasks",
  imports: [Task, NewTask],
  templateUrl: "./tasks.html",
  styleUrl: "./tasks.css",
})
export class Tasks {
  userName = input<string>();
  userId = input<string>();
  isAddingTask = signal(false);
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(newTask: NewTaskData) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId() || "",
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.isAddingTask.set(false);
  }
}
