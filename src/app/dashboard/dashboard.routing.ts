import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details/dashboard-user-details.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: DashboardUsersComponent,
        children: [
          {
            path: '',
            component: DashboardUsersHomeComponent
          },
          {
            path: ':username',
            component: DashboardUserDetailsComponent
          }
        ]
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders =
  RouterModule.forChild(dashboardRoutes);
