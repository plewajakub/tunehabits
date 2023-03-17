import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-last-tracks-component',
  templateUrl: './last-tracks-component.component.html',
  styleUrls: ['./last-tracks-component.component.css']
})
export class LastTracksComponentComponent implements OnInit {
  @Input() tracks$!: Observable<any[]>
  constructor() { }

  ngOnInit(): void {
  }

}
