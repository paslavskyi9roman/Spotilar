import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres = ['rock', 'meatal', 'punk', 'rap', 'pop', 'EDM']

  constructor() { }

  ngOnInit(): void {
  }

}
