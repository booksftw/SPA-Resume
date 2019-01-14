import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { ResumeMeetNickComponent } from './resume-meet-nick/resume-meet-nick.component';
import { ResumeProfessionalComponent } from './resume-professional/resume-professional.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroBlockComponent,
    ResumeMeetNickComponent,
    ResumeProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
