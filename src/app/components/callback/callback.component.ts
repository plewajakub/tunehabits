import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent {
  constructor(private router: Router, private spotifyService: SpotifyService) {
    console.log("aiosdhjfoiahsdoifhaoisdhf")
    const token = this.getTokenFromUrl();
    console.log("token",token)
    if (token) {
      this.spotifyService.setAccessToken(token);
      localStorage.setItem('token', token);
      window.location.href = '../';
    } else {
      window.location.href = '../';
    }
  
  }

  getTokenFromUrl(): string | null {
  const params = new URLSearchParams(window.location.hash.substr(1));
  const token = params.get('access_token');
  const error = params.get('error');
  if (error) {
    console.error(error);
    localStorage.removeItem('token');
    window.location.href = '../';
  }
  return token;
  }

  ngOnInit(): void {
    console.log("asdfasdfasd")
  }

}
