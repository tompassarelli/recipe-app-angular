import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fassets_c%2F2017%2F01%2F20170109-game-day-dip-recipes-roundup-02-thumb-1500xauto-435899.jpg&f=1&nofb=1'), 
    new Recipe('A Test Recipe', 'this is a test',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fassets_c%2F2017%2F01%2F20170109-game-day-dip-recipes-roundup-02-thumb-1500xauto-435899.jpg&f=1&nofb=1'),

  ];
  

  constructor() { }

  ngOnInit() {
  }

}
