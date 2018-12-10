import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUsers } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() loading: boolean;
  @Input() isCursor: boolean;
  @Input() icon: string;
  @Input() title: string;
  @Input() users: IUsers[];
  @Input() username: string;
  @Input() userPageIndex: number;
  @Output() searchByPage = new EventEmitter<number>();

  constructor() { }

  clickPrev() {
    const currentPage = this.userPageIndex;
    if (currentPage === 1) {
      return;
    }

    this.userPageIndex = currentPage - 1;
    this.searchByPage.emit(this.userPageIndex);
  }

  clickNext() {
    const currentPage = this.userPageIndex;

    this.userPageIndex = currentPage + 1;
    this.searchByPage.emit(this.userPageIndex);
  }

  ngOnInit() {
  }

}
