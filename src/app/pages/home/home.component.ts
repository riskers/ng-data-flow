import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';

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

  userLoading = false;
  username = '';
  userPageIndex = 1;
  users: IUsers[] = [];

  followersLoading = false;
  followers: IUsers[] = [];
  followerPageIndex = 1;

  constructor(
    private githubService: GithubService
  ) { }

  searchUsers(page: number) {
    this.userLoading = true;
    this.users = [];
    this.githubService.searchUsers(this.username, page)
      .pipe(
        delay(3000),
      )
      .subscribe(e => {
        this.userLoading = false;
        this.users = e.items;
      });
  }

  searchFollowers(username: string) {
    this.followersLoading = true;
    this.followers = [];
    this.githubService.searchFollowers(username, this.followerPageIndex)
      .pipe(
        delay(3000),
      )
      .subscribe(e => {
        this.followersLoading = false;
        this.followers = e;
        this.followerPageIndex = this.followerPageIndex + 1;
      });
  }

  ngOnInit() {

  }

}
