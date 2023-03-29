import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './services/spotify-service.service';
import { fadeInSlideRightAnimation, fadeInSlideLeftAnimation } from './components/animations';
import { TopThingsComponentComponent } from './components/top-things-component/top-things-component.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [fadeInSlideRightAnimation, fadeInSlideLeftAnimation]
})
export class AppComponent implements OnInit{
  tracks$!: Observable<any[]>;

  term = 0;
  mode = "artists"
  token!: string | null
  constructor(private spotifyService: SpotifyService, public router: Router) {}
  login(): void {
      this.token = localStorage.getItem('token');
      if (this.token) {
        this.spotifyService.setAccessToken(this.token);
        this.tracks$ = this.spotifyService.getRecentlyPlayed();
      } else {
        this.spotifyService.login();
      }
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  handleDurationSwitch(term: number): void {
    this.term = term;
  }

  getTokenFromUrl(): string | null {
    const params = new URLSearchParams(window.location.hash.substr(1));
    const token = params.get('access_token');
    const error = params.get('error');
    if (error) {
      console.error(error);
    }
    return token;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token) {
      this.spotifyService.setAccessToken(this.token);
      this.tracks$ = this.spotifyService.getRecentlyPlayed();
    }
  }
}