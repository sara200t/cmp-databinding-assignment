import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];


  onRunning(countdata: {count: number}) {
      this.numbers.push(countdata.count);
    console.log(countdata.count);
  }

  isEven (number: number): boolean {
    return number % 2 === 0;
  }
}
