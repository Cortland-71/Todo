import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    var todo1 = {
      id:1,
      title: 'Todo one',
      completed: false
    }
    var todo2 = {
      id:2,
      title: 'Todo two',
      completed: true
    }
    var todo3 = {
      id:3,
      title: 'Todo three',
      completed: false
    }
    this.todos = [todo1,todo2,todo3]
  }

}
