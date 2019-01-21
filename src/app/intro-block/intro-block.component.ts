import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.css']
})
export class IntroBlockComponent implements OnInit {
  showNumber: boolean = false;
  showEmail: boolean = false;
  
  constructor() { }

  ngOnInit() {
    console.log(window.scrollY)
  }
  

}
