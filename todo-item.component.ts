import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo = new Todo;
// Event emitter is used in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onclick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered!!");
    
  }

}
