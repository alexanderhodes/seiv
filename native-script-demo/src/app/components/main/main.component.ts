import {Component, OnInit} from "@angular/core";
import {IToDo} from "~/app/interfaces";
import {SECURE_STORAGE_KEY_NAME, SecureStorageService, TodoService} from "~/app/services";

@Component({
    selector: "ns-main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {

    text: string;
    toDos: IToDo[];
    name: string;
    title: string = 'ToDo\'s';
    target: string = 'menu';

    constructor(private todoService: TodoService,
                private secureStorageService: SecureStorageService) {
        this.toDos = [];
        this.name = '';
    }

    ngOnInit(): void {
        this.name = this.secureStorageService.getValue(SECURE_STORAGE_KEY_NAME);
        this.updateTodoList();
    }

    addTodo(): void {
        if (this.text && this.text.length) {
            this.todoService.addTodo(this.text)
                .subscribe(success => {
                    if (success) {
                        this.updateTodoList();
                    }
                });
            this.text = '';
        }
    }

    toggleDone(todo: IToDo): void {
        this.todoService.toggleDone(todo)
            .subscribe(success => {
                if (success) {
                    this.updateTodoList();
                }
            });
    }

    getTitle(): string {
        return `Hi ${ this.name ? this.name : '' }, here are your todo\'s for today!`;
    }

    private updateTodoList(): void {
        this.todoService.getToDos$()
            .subscribe((toDos: IToDo[]) => {
                this.toDos = toDos;
            });
    }

}
