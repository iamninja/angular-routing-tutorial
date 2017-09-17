import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';

const aboutRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about/:username', component: AboutUserComponent },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
