import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { GithubService, ISearchApi } from 'src/app/services/github.service';

import { IUser } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GithubService],
})
export class HomeComponent implements OnInit {

  searchUsername = '';
  userLoading = false;
  userPageIndex = 1;
  users: IUser[] = [];
  selectUsername = '';

  followersLoading = false;
  followers: IUser[] = [];
  followerPageIndex = 1;

  followingsLoading = false;
  followings: IUser[] = [];
  followingsPageIndex = 1;

  constructor(
    private githubService: GithubService
  ) { }

  searchUsers(res: ISearchApi) {
    if (!res.username) {
      return;
    }

    this.userLoading = true;
    this.users = [];
    this.githubService.searchUsers(res.username, res.page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.userLoading = false;
        this.users = e.items;
      });
  }

  searchFollowers(res: ISearchApi) {
    this.followersLoading = true;
    this.followers = [];
    this.githubService.searchFollowers(res.username, res.page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followersLoading = false;
        this.followers = e;
      });
  }

  searchFollowings(res: ISearchApi) {
    this.followingsLoading = true;
    this.followings = [];
    this.githubService.searchFollowings(res.username, res.page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followingsLoading = false;
        this.followings = e;
      });
  }

  searchFollowersAndFollowings(searchUsername: string) {
    this.selectUsername = searchUsername;
    this.searchFollowers({username: searchUsername, page: 1});
    this.searchFollowings({username: searchUsername, page: 1});
  }

  ngOnInit() {

  }

}
