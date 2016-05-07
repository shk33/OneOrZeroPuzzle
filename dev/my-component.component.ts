import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    Hi, I have {{name}}, 
    <span [class.is-awesome]="inputElement.value=='yes'">
      Angular 2 is awesome
    </span>
    <br/>
    Is it awesome?
    <br />
    Enter 'yes' to make it red
    <input type="text" #inputElement (keyup)="0"/>
  `,
  styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
  name = "Lollipop";
}