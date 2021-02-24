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

    localStorage.setItem('likesCounter', JSON.stringify(this.likesCounter));
  };

  getLikes() {
    if (localStorage.getItem('likesCounter') === null) {
      this.likesCounter = 0;
    } else {
      this.likesCounter = JSON.parse(localStorage.getItem('likesCounter'))
    }
  }

  constructor(private actRoute: ActivatedRoute, private dataService: DataService) {
  };

  ngOnInit(): void {
    this.dataService.getAlbums(this.selectedGenre).subscribe((albums) => {
      this.albums = albums['albums']['album'];
    })
    this.getLikes()
  }
}
export interface Albums {
  liked: boolean;
  }