import {Component, OnInit} from "@angular/core";
import {TodoService} from "~/app/services/todo.service";
import {IToDo} from "~/app/interfaces/todo.interface";

@Component({
    selector: "ns-main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {

    todo: string;
    todos: IToDo[];

    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit(): void {
        this.todoService.getTodos$()
            .subscribe(todos => this.todos = todos);
    }

    addTodo(): void {
        this.todoService.addTodo(this.todo);
        this.todo = '';
    }

    toggleDone(todo: string): void {
        this.todoService.toggleDone(todo);
    }

}
