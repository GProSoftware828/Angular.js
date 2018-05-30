import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({

  selector: 'app-root',
  template: `

  <p class="recent" [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>


  <h3>My Testing!</h3>
  <p [ngStyle]="textStyles">Style binding</p>
  <ul>
  	<li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>

  <p>{{ someProperty }}</p>

  <button (click)="myEvent($event)">Click Here!</button>

  `,

  styleUrls: [

  './app.component.css'

  ],

  animations: [

    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

    transition('small <=> large', animate('300ms ease-in', style({
      transform: 'translateX(-90px)'
    }))),
    ]),
  ]

})




export class AppComponent {

  state: string = 'small'

  constructor(private dataService:DataService) {

  }


  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


  someProperty:string = '';



  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }



  myArr = ['his', 'hers', 'yours'];



  myEvent(event) {
  	console.log(event);
  }



  textStyles = {
  	'color' : 'red',
  	'font-size' : '2em'
  }

}