import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
    AboutComponent,
    AboutUserComponent
  ],
  providers: [
    UserService
  ]
})
export class AboutModule { }
