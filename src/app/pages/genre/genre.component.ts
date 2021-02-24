import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  selectedGenre = this.actRoute.snapshot.params.id;

  albums: Albums[] = [] 

  likesCounter: number = 0;

  buttonHandler = (album: Albums) => {
    album.liked = !album.liked;
    this.likesCounter = this.albums.filter(a => a.liked).length;
  };

  constructor(private actRoute: ActivatedRoute, private dataService: DataService) {
    console.log('selected genre is ' + this.selectedGenre)
   };

  ngOnInit(): void {
    this.dataService.getAlbums(this.selectedGenre).subscribe((albums) => {
      this.albums = albums['albums']['album'];
    })
  }
 
}

export interface Albums {
  liked: boolean;
  }