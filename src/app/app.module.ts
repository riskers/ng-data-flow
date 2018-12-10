import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [GithubService],
})
export class AppModule { }
