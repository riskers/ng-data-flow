import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/pages/home/home.interface';
import { ISearchQuery } from 'src/app/services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() loading: boolean;
  @Input() isCursor: boolean;
  @Input() icon: string;
  @Input() title: string;
  @Input() users: IUser[];
  @Input() pageIndex: number;
  @Input() username: string;
  @Output() clickArrow: EventEmitter<ISearchQuery> = new EventEmitter();
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.username) {
      if (changes.username.previousValue !== changes.username.currentValue) {
        this.pageIndex = 1;
      }
    }
  }

}
