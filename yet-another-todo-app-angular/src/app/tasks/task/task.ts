import { Component, inject, Input } from "@angular/core";
import { TaskModel } from "./task.model";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-task",
  standalone: false,
  templateUrl: "./task.html",
  styleUrl: "./task.css",
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
