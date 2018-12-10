import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUsers } from '../pages/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  searchUsers(username: string, page: number): Observable<{items: IUsers[]}> {
    return this.http
      .get<{items: IUsers[]}>(`https://api.github.com/search/users?q=${username}&page=${page}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
