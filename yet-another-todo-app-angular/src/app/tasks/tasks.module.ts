import { NgModule } from "@angular/core";
import { NewTask } from "./new-task/new-task";
import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [Tasks, NewTask, Task],
  exports: [Tasks],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
