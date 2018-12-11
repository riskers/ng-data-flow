import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { GithubService, ISearchQuery } from 'src/app/services/github.service';

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

  onSubmit(query: ISearchQuery) {
    if (!query.username) {
      return;
    }

    this.userPageIndex = 1;
    this.userLoading = true;
    this.users = [];
    this.githubService.searchUsers(query)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.userLoading = false;
        this.users = e.items;
      });
  }

  getFollowers(query: ISearchQuery) {
    this.followersLoading = true;
    this.followers = [];
    this.githubService.searchFollowers(query)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followersLoading = false;
        this.followers = e;
      });
  }

  getFollowings(query: ISearchQuery) {
    this.followingsLoading = true;
    this.followings = [];
    this.githubService.searchFollowings(query)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followingsLoading = false;
        this.followings = e;
      });
  }

  searchFollowersAndFollowings(username: string) {
    // this.reset();
    this.followerPageIndex = 1;
    this.followingsPageIndex = 1;

    this.selectUsername = username;
    this.getFollowers({username, page: 1});
    this.getFollowings({username, page: 1});
  }

  ngOnInit() {

  }

}
