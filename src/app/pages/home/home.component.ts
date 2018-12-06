import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  username = '';

  search() {
    this.githubService.searchUsers('ss', 1)
      .subscribe(e => {
        console.log(e.items);
      });
  }

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {

  }

}
