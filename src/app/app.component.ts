import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './services/spotify-service.service';
import { fadeInSlideRightAnimation } from './components/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [fadeInSlideRightAnimation]
})
export class AppComponent implements OnInit{
  tracks$!: Observable<any[]>;
  token!: string | null
  constructor(private spotifyService: SpotifyService) {}
  login(): void {
      this.token = this.getTokenFromUrl();
      if (this.token) {
        this.spotifyService.setAccessToken(this.token);
        this.tracks$ = this.spotifyService.getRecentlyPlayed();
      } else {
        this.spotifyService.login();
      }
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
    this.token = this.getTokenFromUrl();
    if(this.token) {
      this.spotifyService.setAccessToken(this.token);
      this.tracks$ = this.spotifyService.getRecentlyPlayed();
    }
    console.log(localStorage)
  }
}