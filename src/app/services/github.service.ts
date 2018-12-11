import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../pages/home/home.interface';

export interface ISearchQuery {
  username: string;
  page: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'https://api.github.com';

  searchUsers(e: ISearchQuery): Observable<{items: IUser[]}> {
    return this.http
      .get<{items: IUser[]}>(`${this.url}/search/users?q=${e.username}&page=${e.page}`);
  }

  searchFollowers(e: ISearchQuery): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.url}/users/${e.username}/followers?page=${e.page}`);
  }

  searchFollowings(e: ISearchQuery): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.url}/users/${e.username}/following?page=${e.page}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
