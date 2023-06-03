import { Component } from '@angular/core';

interface Car {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: Car[] = [
    { make: 'BMW', model: '3series', year: 2019 },
    { make: 'Hyundai', model: 'i10', year: 2020 },
    { make: 'Mercedes', model: 'S-classs', year: 2018 }
  ];

  showData: boolean = true;

  toggleData(): void {
    this.showData = !this.showData;
  }
}


