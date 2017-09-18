import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { appRouting } from './app.routing';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    appRouting
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
