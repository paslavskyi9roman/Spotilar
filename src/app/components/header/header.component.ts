import {  Component,Input, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() likesCounter: number;

  constructor() { }

  ngOnInit(): void {
  }

}
