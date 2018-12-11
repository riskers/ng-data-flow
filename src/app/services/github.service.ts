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

  searchUsers(username: string, page: number): Observable<{items: IUser[]}> {
    return this.http
      .get<{items: IUser[]}>(`https://api.github.com/search/users?q=${username}&page=${page}`);
  }

  searchFollowers(username: string, page: number): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`https://api.github.com/users/${username}/followers?page=${page}`);
  }

  searchFollowings(username: string, page: number): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`https://api.github.com/users/${username}/following?page=${page}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
