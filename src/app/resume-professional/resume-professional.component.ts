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
        title: 'RousseauChain (Active Commercial Business)',
        imgsrc: '/assets/images/projects/rousseauchaincom_img.png',
        description: 'A ecommerce Wordpress site that\'s active ',
        role_in_project: 'Principal Wordpress developer and designer',
        github_link: '',
        languages_used: ['Wordpress', 'PHP' , 'Javascript', 'JQuery', 'HTML', 'CSS', 'Woo-commerce', '3rd-party-integrations']
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: 'Everything - personal project',
        github_link: 'https://github.com/booksftw/dota-2-edge',
        languages_used: ['Firebase', 'Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
      },
      {
        title: 'Creative Project Management Board ( Needs updated IMG )',
        imgsrc: '/assets/images/projects/realtimeboard_img.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: 'Developed entire Angular web app and Firebase backend with some React native',
        github_link: '',
        languages_used: ['In Progress']
      },
      {
        title: 'Lighthouse Eats',
        imgsrc: '/assets/images/projects/ligthouseeats_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/restaurant_mid_term',
      languages_used: ['Node', 'Express', 'Postgres', 'JavaScript', '3rd-party-API', 'JQuery']
      },
      {
        title: 'booksftw.com',
        imgsrc: '/assets/images/projects/booksftw_img.png',
        description: 'A stackoverflow Q & A site to answer question for the company.',
        role_in_project: '',
        github_link: '',
        languages_used: ['Wordpress', 'PHP', 'Custom Fields', 'Plugin', 'Theme development']
      },
      {
        title: 'TinyApp',
        imgsrc: '/assets/images/projects/tinyapp_img.jpg',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/tinyApp',
        languages_used: ['Node', 'Express' , 'JQuery', 'JavaScript', 'CSS', 'EJS']
      },
      {
        title: 'Tweeter',
        imgsrc: '/assets/images/projects/tweeter_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/tweeter',
        languages_used: ['Node', 'Express', 'EJS', 'CSS', 'JavaScript', 'JQuery' ]
      },
      {
        title: 'Chatty',
        imgsrc: '/assets/images/projects/chatty_img.png',
        description: 'Angular app that intelligently figures out to pick the best dota2 heroes',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/Chatty-react-websockets',
        languages_used: ['React', 'Websockets' ,'JavaScript', 'CSS']
      },
      {
        title: 'This Resume',
        imgsrc: '/assets/images/projects/this_resume_img',
        description: '',
        role_in_project: '',
        github_link: 'https://github.com/booksftw/SPA-Resume',
        languages_used: ['Angular', 'JavaScript', 'CSS']
      }
    );

  }

  onProjectClick (project) {
    console.log('github link', project.github_link);
    const github_link = project.github_link;
    window.location.href = github_link;
  }
}
