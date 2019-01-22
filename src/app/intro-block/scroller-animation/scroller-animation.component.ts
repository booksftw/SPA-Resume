import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroller-animation',
  templateUrl: './scroller-animation.component.html',
  styleUrls: ['./scroller-animation.component.css']
})
export class ScrollerAnimationComponent implements OnInit {

  showMouse: boolean = false;

  continue_checking_scroll_position: boolean = true;

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
        this.showMouse = true;
        console.log('SET TIME OUT CALLED', this.showMouse)
        this.start_check_scroll_position_loop();
      }, 1500);
  }

  start_check_scroll_position_loop() {
    // Turn off recursion loop when user scrolls to next component
    window.scrollY > 460 ? this.continue_checking_scroll_position = false : null;

    // Slows the recurssion loop down
    setTimeout( () => {
      if (this.continue_checking_scroll_position) {
        this.start_check_scroll_position_loop();
      } else {
        this.showMouse = false;
      }
    }, 300 );

  }


}
