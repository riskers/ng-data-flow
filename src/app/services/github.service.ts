import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../pages/home/home.interface';

export interface ISearchApi {
  username: string;
  page: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'https://api.github.com';

  searchUsers(username: string, page: number): Observable<{items: IUser[]}> {
    return this.http
      .get<{items: IUser[]}>(`${this.url}/search/users?q=${username}&page=${page}`);
  }

  searchFollowers(username: string, page: number): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.url}/users/${username}/followers?page=${page}`);
  }

  searchFollowings(username: string, page: number): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.url}/users/${username}/following?page=${page}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
