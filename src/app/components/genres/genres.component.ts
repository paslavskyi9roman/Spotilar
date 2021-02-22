import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres = [{title: 'rock'}, {title: 'metal'}, {title: 'punk'},  {title: 'rap'}, {title: 'pop'}, {title: 'EDM'},]

  constructor() { }

  ngOnInit(): void {
  }

}
