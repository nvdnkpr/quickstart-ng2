import {Component, Input} from '@angular/core';

/**
 * This component injects "barDetail" (resolve data) and renders the detail
 */
let template = `
<h5>Bar Details</h5>

<label>Id: </label><input type="text" [value]="bar.id"><br>
<label>Name: </label><input type="text" [value]="bar.name"><br>
<label>Count: </label><input type="text" [value]="bar.description"><br>
`;

@Component({
  selector: 'bar-detail',
  template: template
})
export class BarDetailsComponent {
  // `barDetail` resolve data as an input
  @Input('barDetail') bar;
}
