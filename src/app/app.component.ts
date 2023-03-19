import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './services/spotify-service.service';
import { fadeInSlideRightAnimation, fadeInSlideLeftAnimation } from './components/animations';
import { TopThingsComponentComponent } from './components/top-things-component/top-things-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [fadeInSlideRightAnimation, fadeInSlideLeftAnimation]
})
export class AppComponent implements OnInit{
  @ViewChild('topThings', {static: true}) topThings!: TopThingsComponentComponent
  tracks$!: Observable<any[]>;

  term = 0;
  mode = "artists"
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

  handleDurationSwitch(term: number): void {
    this.term = term;
    this.topThings.render();
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
  }
}