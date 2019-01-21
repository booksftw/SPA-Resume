import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller-animation',
  templateUrl: './scroller-animation.component.html',
  styleUrls: ['./scroller-animation.component.css']
})
export class ScrollerAnimationComponent implements OnInit {

  showMouse: boolean = false;

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
        this.showMouse = true;
      }, 3000);
  }


}
