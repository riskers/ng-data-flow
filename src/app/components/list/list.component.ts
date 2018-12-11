import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/pages/home/home.interface';
import { ISearchApi } from 'src/app/services/github.service';

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
  @Input() username: string;
  @Output() clickArrow: EventEmitter<ISearchApi> = new EventEmitter();
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
    this.clickArrow.emit({
      username: this.username,
      page: this.pageIndex,
    });
  }

  clickNext() {
    const currentPage = this.pageIndex;

    this.pageIndex = currentPage + 1;

    this.clickArrow.emit({
      username: this.username,
      page: this.pageIndex,
    });
  }

  ngOnInit() {
  }

}
