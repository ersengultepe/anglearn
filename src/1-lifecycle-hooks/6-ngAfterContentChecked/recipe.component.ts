import { Component, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true, // Standalone olduğunu belirt
  template: `
    <h3>Recipe Details</h3>
    <ng-content></ng-content>
  `
})
export class RecipeComponent implements AfterContentChecked {
  @ContentChild('content') contentRef!: ElementRef;

  ngAfterContentChecked() {
    if (this.contentRef?.nativeElement) {
      console.log('Recipe content checked:', this.contentRef.nativeElement.textContent);
    }
  }
}
