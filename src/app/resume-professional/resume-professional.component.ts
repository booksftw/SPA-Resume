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
        title: 'Rousseau Chain (active Commercial Business)',
        imgsrc: '/assets/images/projects/rousseauchaincom_img.png',
        description: "A ecommerce Wordpress site that's active ",
        role_in_project: 'lead dev and design',
        github_link: '',
        languages_used: []
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/dota-2-edge',
        languages_used: []
      },
      {
        title: 'Creative Project Management Board ( Needs updated IMG )',
        imgsrc: '/assets/images/projects/realtimeboard_img.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: '',
        languages_used: []
      },
      {
        title: 'Lighthouse Eats',
        imgsrc: '/assets/images/projects/ligthouseeats_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/restaurant_mid_term',
        languages_used: []
      },
      {
        title: 'booksftw.com',
        imgsrc: '/assets/images/projects/booksftw_img.png',
        description: 'A stackoverflow Q & A site to answer question for the company.',
        role_in_project: '',
        github_link: '',
        languages_used: []
      },
      {
        title: 'TinyApp',
        imgsrc: '/assets/images/projects/tinyapp_img.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/tinyApp',
        languages_used: []
      },
      {
        title: 'Tweeter',
        imgsrc: '/assets/images/projects/tweeter_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/tweeter',
        languages_used: []
      },
      {
        title: 'Chatty',
        imgsrc: '/assets/images/projects/chatty_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/Chatty-react-websockets',
        languages_used: []
      },
      {
        title: 'This Resume',
        imgsrc: '/assets/images/projects/this_resume_img',
        description: '',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/SPA-Resume',
        languages_used: []
      }
    );

  }

  onProjectClick (project) {
    console.log('github link', project.github_link);
    const github_link = project.github_link;
    window.location.href = github_link;
  }
}
