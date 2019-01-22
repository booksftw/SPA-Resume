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
        description: `A ecommerce Wordpress site for RousseauChain ltd. It\'s an active site with customers. 
                      In addition to the standard e-commerce site I developed a quick order form that enables the customer
                      to add many items to cart by using only the keyboard, and it has a relationship to an offline database. On top
                      of that there's a visual catalog experience. `,
        role_in_project: 'Main Developer and Designer',
        github_link: '',
        languages_used: ['Wordpress', 'PHP' , 'Javascript', 'JQuery', 'HTML', 'CSS', 'Woo-commerce', '3rd-party-integrations']
      },
      {
        title: 'Dota2Edge',
        imgsrc: '/assets/images/dota2-wallpaper.jpg',
        description: `Dota 2 is a game, in a way similar to chess. It gives you a short period of time to pick
                      "heroes" that counter the opposing team and synergize with your team.
                      This app tracks that process every step of the way in realtime the secret algorithm calculates
                      the best hero to choose so you're always at an advantage. Included is a backend that enables the
                      admins to update the data with a form and a point a click graph for relationships.`,
        role_in_project: 'Everything',
        github_link: 'https://github.com/booksftw/dota-2-edge',
        languages_used: ['Firebase', 'Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
      },
      {
        title: 'Creative Project Management Board ( Needs updated IMG )',
        imgsrc: '/assets/images/projects/realtimeboard_img.jpg',
        description: 'To-be-announced',
        role_in_project: `All Angular Web App and Firebase, little React Native`,
        github_link: '',
        languages_used: ['In Progress']
      },
      {
        title: 'Lighthouse Eats',
        imgsrc: '/assets/images/projects/ligthouseeats_img.png',
        description: `An app similar to SkipTheDishes or other food delivery apps.
                      It has route guards and basic authentication enabling user-stories.
                      A customer logged in can visit all the restaurants available in a long index list.
                      On clicking a store they are presented with a menu and cart, after checking out there's an estimated wait time.
                      After an order has been processed, a logged in store owner can visit his restaurants backend and manage the order
                      in an interactive way.`,
        role_in_project: 'Entire backend and some frontend" ',
        github_link: 'https://github.com/booksftw/restaurant_mid_term',
      languages_used: ['Node', 'Express', 'Postgres', 'Knex' , 'JavaScript', '3rd-party-API', 'JQuery']
      },
      {
        title: 'booksftw.com',
        imgsrc: '/assets/images/projects/booksftw_img.png',
        description: 'A stackoverflow Q & A site to answer questions for the company, so I don\'t have to repeat myself.',
        role_in_project: 'Everything',
        github_link: '',
        languages_used: ['Wordpress', 'PHP', 'Custom Fields', 'Plugin', 'Theme development']
      },
      {
        title: 'TinyApp',
        imgsrc: '/assets/images/projects/tinyapp_img.jpg',
        description: 'A bitly like site that shortens urls and basic analytics.',
        role_in_project: 'Everything',
        github_link: 'https://github.com/booksftw/tinyApp',
        languages_used: ['Node', 'Express' , 'JQuery', 'JavaScript', 'CSS', 'EJS']
      },
      {
        title: 'Tweeter',
        imgsrc: '/assets/images/projects/tweeter_img.png',
        description: 'A twitter-like site for posting your latest updates.',
        role_in_project: 'Everything',
        github_link: 'https://github.com/booksftw/tweeter',
        languages_used: ['Node', 'Express', 'EJS', 'CSS', 'JavaScript', 'JQuery' ]
      },
      {
        title: 'Chatty',
        imgsrc: '/assets/images/projects/chatty_img.png',
        description: 'A realtime chatroom app that\'s powered by websockets.',
        role_in_project: 'Everything',
        github_link: 'https://github.com/booksftw/Chatty-react-websockets',
        languages_used: ['React', 'Websockets' , 'JavaScript', 'CSS']
      },
      {
        title: 'This Resume',
        imgsrc: '/assets/images/resume-screenshot.png',
        description: 'This resume was made with you :-)',
        role_in_project: 'Everything for you',
        github_link: 'https://github.com/booksftw/SPA-Resume',
        languages_used: ['Angular', 'JavaScript', 'CSS']
      }
    );

  }

  onProjectClick (project) {
    const github_link = project.github_link;
    window.location.href = github_link;
  }
}
