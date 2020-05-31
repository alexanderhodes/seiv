import {Component, OnInit} from "@angular/core";
import {SECURE_STORAGE_KEY_NAME, SecureStorageService, TodoService} from "~/app/services/public_api";
import {IToDo} from "~/app/interfaces/todo.interface";

@Component({
    selector: "ns-main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {

    todo: string;
    todos: IToDo[];
    name: string;

    constructor(private todoService: TodoService,
                private secureStorageService: SecureStorageService) {
        this.todos = [];
        this.name = '';
    }

    ngOnInit(): void {
        this.todoService.getTodos$().subscribe(todos => this.todos = todos);
        this.name = this.secureStorageService.getValue(SECURE_STORAGE_KEY_NAME);
    }

    addTodo(): void {
        this.todoService.addTodo(this.todo);
        this.todo = '';
    }

    toggleDone(todo: string): void {
        this.todoService.toggleDone(todo);
    }

    getTitle(): string {
        return `Hi ${ this.name ? this.name : '' }, here are your todo\'s for today!`;
    }

}
