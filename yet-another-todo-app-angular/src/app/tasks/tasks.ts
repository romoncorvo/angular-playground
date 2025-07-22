import { Component, inject, Input, signal } from "@angular/core";
import { TasksService } from "./tasks.service";

@Component({
  selector: "app-tasks",
  standalone: false,
  templateUrl: "./tasks.html",
  styleUrl: "./tasks.css",
})
export class Tasks {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  private tasksService = inject(TasksService);
  isAddingTask = signal(false);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
