import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(public http:HttpClient) { 
    console.log('data service connected')
  }

  getAlbums(genre){ 
   return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json`)
   .pipe(map(res => res) )
  }


  searchTrack(trackName) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json`)
    .pipe(map(res => res) )
  }
  
}