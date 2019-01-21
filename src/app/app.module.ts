import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { ResumeMeetNickComponent } from './resume-meet-nick/resume-meet-nick.component';
import { ResumeProfessionalComponent } from './resume-professional/resume-professional.component';
import { FooterComponent } from './footer/footer.component';
import { GithubLinkStyleDirective } from './shared/github-link-style.directive';
import { SkillsComponent } from './resume-professional/skills/skills.component';
import { ScrollerAnimationComponent } from './intro-block/scroller-animation/scroller-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroBlockComponent,
    ResumeMeetNickComponent,
    ResumeProfessionalComponent,
    FooterComponent,
    GithubLinkStyleDirective,
    SkillsComponent,
    ScrollerAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
