import { Component } from '@angular/core';
import { RecipeComponent } from './recipe.component';

@Component({
  selector: 'app-diet-app',
  standalone: true, // Standalone olduğunu belirt
  imports: [
    RecipeComponent
  ],
  template: `
    <h2>Diet Plan</h2>
    <button (click)="changeRecipe()">Change Recipe</button>
    <app-recipe>
      <p #content>{{ recipeContent }}</p>
    </app-recipe>
  `
})
export class DietAppComponent {
  recipeContent = "Chicken Salad with Avocado";

  changeRecipe() {
    this.recipeContent = "Grilled Salmon with Asparagus";
  }
}
