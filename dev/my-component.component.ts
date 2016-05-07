import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
  selector: 'my-component',
  template: `
    Hi, I have <span [style.color]="inputElement.value=='yes'? 'red':''">{{name}}</span>, 
    <span [class.is-awesome]="inputElement.value=='yes'">
      Angular 2 is awesome
    </span>
    <br/>
    Is it awesome?
    <br />
    Enter 'yes' to make it red
    <input type="text" #inputElement (keyup)="0"/>
    <br /><br />
    <button [disabled]="inputElement.value=='yes'">
      Only enabled if 'yes' was introduced
    </button>
    <test></test>
  `,
  styleUrls: ['src/css/mycomponent.css'],
  directives: [TestComponent]
})

export class MyComponentComponent implements OnInit{
  name: string;

  ngOnInit():any{
    this.name = "ngOnInit";
  }

}