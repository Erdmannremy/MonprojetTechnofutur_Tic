import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  myString: string = "hello World!!!";
  myNumber: number = 42.2222222222222222222222222222;
  myDate: Date = new Date();
  myTempC: number = 16;
  myTempF: number = 42;

  timer: any = undefined;

  start(): void {
    this.timer = setInterval(
      () => {
        this.myNumber = this.myNumber + 1;
      }, 1000
    )
  }

  stop(): void {
    clearInterval(this.timer);
  }

  reset(): void {
    this.myNumber = 0;
  }

  methodTest(name: string, age: number): void {
    console.log("Bonjour " + name + " tu as " + age + " an(s)");

  }
}
