import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimerComponent, { static: false })
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0}

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('done in this life cycle');
    setTimeout( () => this.seconds = () => this.timerComponent.seconds , 0);
  }

  start() {  this.timerComponent.start() }
  stop() { this.timerComponent.stop() }

}
