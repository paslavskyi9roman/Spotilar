import {  Component,Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  songs = [];

  trackName : string = '';

  @Input() likesCounter: number;

  constructor( private dataService: DataService) { }

  runSearch() {
    this.dataService.searchTrack(this.trackName).subscribe((songs) => {
      this.songs = songs['results']['trackmatches']['track']
    })
  }

  submitHandler(event) {
    this.trackName = event.target.value;
    this.runSearch()
  }

  ngOnInit(): void {
   
  }

}
