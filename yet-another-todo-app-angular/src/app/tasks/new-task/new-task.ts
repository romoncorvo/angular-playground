import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  standalone: false,
  templateUrl: "./new-task.html",
  styleUrl: "./new-task.css",
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
