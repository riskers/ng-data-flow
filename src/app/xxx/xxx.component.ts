import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xxx',
  templateUrl: './xxx.component.html',
  styleUrls: ['./xxx.component.css']
})
export class XxxComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() f = new EventEmitter<string>();

  todos: string[] = [];

  constructor() { }

  follow() {
    this.f.emit('xx');
  }

  enter(e) {
    console.log(e.target.value)
    this.todos.push(e.target.value)
  }

  ngOnInit() {
  }

}
