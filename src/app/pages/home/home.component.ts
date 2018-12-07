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
})
export class HomeComponent implements OnInit {

  private username = '';
  private users: IUsers[] = [];

  search(username: string) {
    this.githubService.searchUsers(username, 1)
      .subscribe(e => {
        this.users = e.items;
      });
  }

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {

  }

}
