import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-top-things-component',
  templateUrl: './top-things-component.component.html',
  styleUrls: ['./top-things-component.component.css']
})
export class TopThingsComponentComponent implements OnInit {
  topThingsData!: any;
  artistsData!: Array<any>;
  tracksData!: Array<any>;
  currentData!: any;
  ready:boolean = false;
  private _term!:number; 
  private _mode!: string
  @Input() //'albums', 'artists', 'songs'
  set mode(value: string) {
    this._mode = value;
    switch(value){
      
      case 'artists':
        this.currentData = this.artistsData;
        this.term = this.term;
        break;
      case 'songs':
      case 'albums':
        this.currentData = this.tracksData;
        this.term = this.term;
        break;
    }
  }
  get mode(): string {
    return this._mode;
  };
  
  @Input()
  set term(value: number) {
    this._term = value;
    this.topThingsData = this.currentData[this._term];
  }

  get term(): number {
    return this._term;
  };

  constructor(private spotifyService: SpotifyService) {
    
   }


  ngOnInit(): void {
    this.spotifyService.getUserTopArtists(9).subscribe((data)=>{this.artistsData = data; this.currentData = this.artistsData; this.topThingsData = this.currentData[this.term]; this.ready = true; console.log(this.artistsData, "artists")})
    this.spotifyService.getUserTopTracks(9).subscribe((data:any)=>{this.tracksData = data; console.log(this.tracksData, "tracks")})
  }

}
