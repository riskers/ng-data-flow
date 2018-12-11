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

  userLoading = false;
  username = '';
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

  searchUsers(username: string) {
    if (!username) {
      return;
    }

    this.userLoading = true;
    this.users = [];
    this.githubService.searchUsers(username, this.userPageIndex)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.userLoading = false;
        this.users = e.items;
      });
  }

  searchFollowers(username: string, page: number) {
    this.followersLoading = true;
    this.followers = [];
    this.githubService.searchFollowers(username, page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followersLoading = false;
        this.followers = e;
        // this.followerPageIndex = this.followerPageIndex + 1;
      });
  }

  searchFollowings(username: string, page: number) {
    this.followingsLoading = true;
    this.followings = [];
    this.githubService.searchFollowings(username, page)
      .pipe(
        delay(2000),
      )
      .subscribe(e => {
        this.followingsLoading = false;
        this.followings = e;
        // this.followingsPageIndex = this.followingsPageIndex + 1;
      });
  }

  searchFollowersAndFollowings(username: string) {
    this.searchFollowers(username, 1);
    this.searchFollowings(username, 1);
  }

  ngOnInit() {

  }

}
