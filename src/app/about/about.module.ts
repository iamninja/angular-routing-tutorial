import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../shared/services/user.service';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';
import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutSectionComponent } from './about-section/about-section.component';


@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  providers: [
    UserService,
    AboutUsersResolve,
    AboutUserResolve
  ]
})
export class AboutModule { }
