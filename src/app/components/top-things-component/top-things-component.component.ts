import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-top-things-component',
  templateUrl: './top-things-component.component.html',
  styleUrls: ['./top-things-component.component.css']
})
export class TopThingsComponentComponent implements OnInit {
  @Input() mode!:string; //'albums', 'artists', 'songs'
  @Input() term!:number;  // 'short', 'medium', 'long'
  topThingsData!: any;
  constructor(private spotifyService: SpotifyService) { }

  render() {
    this.spotifyService.getUserTopArtists().subscribe((data)=>{this.topThingsData = data[this.term].items; console.log("Rendering"); console.log(this.mode+" "+this.term)})
  }

  ngOnInit(): void {
    this.spotifyService.getUserTopArtists().subscribe((data)=>{this.topThingsData = data[this.term].items})
    
  }

}
