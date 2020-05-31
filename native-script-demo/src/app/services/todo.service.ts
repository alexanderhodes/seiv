import {Injectable} from "@angular/core";
import {Observable, ReplaySubject, Subject} from "rxjs";
import {IToDo} from "~/app/interfaces/todo.interface";

@Injectable({
    providedIn: "root"
})
export class TodoService {

    private _todos$: Subject<IToDo[]>;
    private _todos: IToDo[];

    constructor() {
        this._todos$ = new ReplaySubject(1);
        this._todos = [{
            name: "Essen",
            done: false
        }, {
            name: "Lernen",
            done: false
        }, {
            name: "Spielen",
            done: false
        }, {
            name: "Fernsehen",
            done: false
        }];
        this._todos$.next(this._todos);
    }

    getTodos$(): Observable<IToDo[]> {
        return this._todos$.asObservable();
    }

    addTodo(todo: string): void {
        this._todos.push({ name: todo, done: false });
        this._todos$.next(this._todos);
    }

    toggleDone(todo: string): void {
        const index = this._todos.findIndex(element => element.name === todo);
        const oldState = this._todos[index];
        this._todos.splice(index, 1, { name: todo, done: !oldState.done});
        this._todos$.next(this._todos);
    }

}
