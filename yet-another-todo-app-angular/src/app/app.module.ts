import { NgModule } from "@angular/core";
import { App as AppComponent } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { TasksService } from "./tasks/tasks.service";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [AppComponent, Header, User],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [TasksService],
})
export class AppModule {}
