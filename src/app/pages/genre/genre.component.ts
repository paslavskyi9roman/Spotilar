import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genre_title: string;

  constructor(private actRoute: ActivatedRoute) {
    this.genre_title = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {
  }

}
