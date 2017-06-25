import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];


  onRunning(countdata: {count: number}) {
    if (countdata.count % 2 === 0) {
      this.evenNumbers.push(countdata.count);
    }
    else {
      this.oddNumbers.push(countdata.count);
    }
  }

}
