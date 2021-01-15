import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe(
      'Test Receipe',
      'This is a simple test receipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Receipe(
      'Test Receipe2',
      'This is a simple test receipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
