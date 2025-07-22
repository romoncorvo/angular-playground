import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  output,
} from "@angular/core";
import { TaskModel } from "./task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-task",
  imports: [CardComponent, DatePipe],
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
