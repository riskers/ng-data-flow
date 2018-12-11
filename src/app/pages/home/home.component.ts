import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';

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

  followersLoading = false;
  followers: IUser[] = [];
  followerPageIndex = 1;

  followingsLoading = false;
  followings: IUser[] = [];
  followingsPageIndex = 1;

  constructor(
    private githubService: GithubService
  ) { }

  searchUsers(searchUsername: string) {
    if (!searchUsername) {
      return;
    }

    this.userLoading = true;
    this.users = [];
    this.githubService.searchUsers(searchUsername, this.userPageIndex)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.userLoading = false;
        this.users = e.items;
      });
  }

  searchFollowers(searchUsername: string, page: number) {
    this.followersLoading = true;
    this.followers = [];
    this.githubService.searchFollowers(searchUsername, page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followersLoading = false;
        this.followers = e;
      });
  }

  searchFollowings(searchUsername: string, page: number) {
    this.followingsLoading = true;
    this.followings = [];
    this.githubService.searchFollowings(searchUsername, page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followingsLoading = false;
        this.followings = e;
      });
  }

  searchFollowersAndFollowings(searchUsername: string) {
    this.searchFollowers(searchUsername, 1);
    this.searchFollowings(searchUsername, 1);
  }

  ngOnInit() {

  }

}
