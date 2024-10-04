import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[]=[
    {
      id:'r1',
      title:'Schnitzel',
      imageUrl:'assets/recipe1.jpg',
      ingredients:['French Fries','park meat','salad'],
    },
    {
      id:'r2',
      title:'spaghetti',
      imageUrl:'assets/recipe1.jpg',
      ingredients:['spaghetti',' meat','salad'],
    }
  ]

  constructor() { }

  ngOnInit() {
    return
  }

}
