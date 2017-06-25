import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onStart = new EventEmitter<{count: number}>();
  count = 0;
  running = false;
  handle;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.setInterval();
  }

  onStopGame() {
    clearInterval(this.handle);
    this.running = false;
    // this.count = 0;
  }

  protected setInterval() {
    if (!this.running) {
      this.running = true;
      this.handle = setInterval(() => {
        this.onStart.emit({
          count: this.count++
        });
      }, 1000);
    }
  }

}
