import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
  	'sedan', 'coupe', 'suv'
  ];

  myData() {
  	return 'This is my data, man!';
  }

}
