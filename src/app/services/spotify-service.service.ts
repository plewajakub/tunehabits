import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import SpotifyWebApi from 'spotify-web-api-js';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyApi: SpotifyWebApi.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new SpotifyWebApi();
  }

  login(): void {
    const scopes = ['user-read-recently-played', 'user-top-read'];
    const clientId = '3062dd999226449289bb4f0963b37e1a';
    const redirectUrl = 'http://localhost:4200/';

    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scopes.join(' '))}`;

    window.location.href = url;
  }

  setAccessToken(token: string): void {
    this.spotifyApi.setAccessToken(token);
  }

  getRecentlyPlayed(): Observable<any[]> {
    return from(this.spotifyApi.getMyRecentlyPlayedTracks({ limit: 5 }))
      .pipe(
        map((result: any) => result.items)
      );
  }

   getUserTopArtists(): Observable<any[]> {
    const durationTerms = ['short_term', 'medium_term', 'long_term'];
    const observables = durationTerms.map(term => this.spotifyApi.getMyTopArtists({ limit: 9, time_range: term }));
    return forkJoin(observables);
  }
}

