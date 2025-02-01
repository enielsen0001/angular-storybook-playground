import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-component',
  template: '<p>Hello {{who}}!</p>'
})
export class HelloComponent {
  @Input() who: string = 'World';
}
