import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Subject, Observable } from 'rxjs';

export interface IUsers {
  login: string;
  id: number;
  avatar_url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GithubService],
})
export class HomeComponent implements OnInit {

  username = '';
  userPageIndex = 1;
  users: IUsers[] = [];

  constructor(
    private githubService: GithubService
  ) { }

  ss(page: number) {
    console.log(page)
  }

  search(page: number) {
    this.githubService.searchUsers(this.username, page)
      .subscribe(e => {
        this.users = e.items;
      });
  }

  ngOnInit() {

  }

}
