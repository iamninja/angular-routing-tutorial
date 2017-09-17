import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutSectionComponent } from './about-section/about-section.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutSectionComponent,
    children: [
      {
        path: '', // match about/
        component: AboutComponent,
        resolve: {
          users: AboutUsersResolve
        }
      },
      {
        path: ':username', // match about/:username
        component: AboutUserComponent,
        resolve: {
          user: AboutUserResolve
        }
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
