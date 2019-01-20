import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-professional',
  templateUrl: './resume-professional.component.html',
  styleUrls: ['./resume-professional.component.css']
})
export class ResumeProfessionalComponent implements OnInit {

  projects;

  constructor() { }

  ngOnInit() {

    this.projects = [];

    this.projects.push(
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes'
      },
      {
        title: '',
        imgsrc: '',
        description: ''
      },
    );

  }

}
