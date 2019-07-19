import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@Input() hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}