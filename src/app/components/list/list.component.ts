import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/pages/home/home.interface';

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
  @Input() users: IUser[];
  @Input() pageIndex: number;
  @Output() clickArrow: EventEmitter<number> = new EventEmitter();
  @Output() clickItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  selectItem(username: string) {
    this.clickItem.emit(username);
  }

  clickPrev() {
    const currentPage = this.pageIndex;
    if (currentPage === 1) {
      return;
    }

    this.pageIndex = currentPage - 1;
    this.clickArrow.emit(this.pageIndex);
  }

  clickNext() {
    const currentPage = this.pageIndex;

    this.pageIndex = currentPage + 1;
    this.clickArrow.emit(this.pageIndex);
  }

  ngOnInit() {
  }

}
