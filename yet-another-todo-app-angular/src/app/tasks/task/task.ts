import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from "@angular/core";
import { TaskModel } from "./task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-task",
  imports: [CardComponent, DatePipe],
  templateUrl: "./task.html",
  styleUrl: "./task.css",
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
