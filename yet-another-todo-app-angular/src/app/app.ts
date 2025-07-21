import { Component, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from "./dummy-users";
import { Tasks } from "./tasks/tasks";

@Component({
  selector: "app-root",
  imports: [CommonModule, Header, User, Tasks],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string | undefined>(undefined);

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId());
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
