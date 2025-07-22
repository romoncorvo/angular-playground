import { Component, computed, signal } from "@angular/core";
import { DUMMY_USERS } from "./dummy-users";

@Component({
  standalone: false,
  selector: "app-root",
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
