import { NgModule } from "@angular/core";
import { App as AppComponent } from "./app";
import { Header } from "./header/header";
import { Tasks } from "./tasks/tasks";
import { User } from "./user/user";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { TasksService } from "./tasks/tasks.service";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Header,
    User,
    Tasks,
    NewTask,
    Task,
    CardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService],
})
export class AppModule {}
