import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() isCursor: boolean;
  @Input() icon: string;
  @Input() title: string;
  @Input() users: IUsers[];

  constructor() { }

  ngOnInit() {
  }

}
