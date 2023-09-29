import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Snake-Game';
  element = document.getElementById("text") as HTMLElement;
  element2 = document.getElementById("button") as HTMLElement;

  start: number = 0;
  previousTimeStamp: number = 0;
  done = false;

  constructor() {

  }

  step(timeStamp: any) {
    this.element2.style.height = "100px";
    if (this.start === undefined) {
      this.start = timeStamp;
    }
    const elapsed = timeStamp - this.start;

    if (this.previousTimeStamp !== timeStamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const count = Math.min(0.1 * elapsed, 200);
      this.element.style.transform = `translateX(${count}px)`;
      if (count === 200) this.done = true;
    }

    if (elapsed < 2000) {
      // Stop the animation after 2 seconds
      this.previousTimeStamp = timeStamp;
      if (!this.done) {
        window.requestAnimationFrame(this.step);
      }
    }

  }
  metodo1() {
    window.requestAnimationFrame(this.step);

  }
  
}
