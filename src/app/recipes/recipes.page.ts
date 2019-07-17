import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
      ingredients: ['French Fries', 'Poak Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://lilluna.com/wp-content/uploads/2018/05/easy-spaghetti-resize-2.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
