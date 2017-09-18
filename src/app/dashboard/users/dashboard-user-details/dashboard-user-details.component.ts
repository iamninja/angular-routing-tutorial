import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
// need?
import { CanDeactivateGuard } from '../../../shared/guards/can-deactivate.guard';



@Component({
  selector: 'app-dashboard-user-details',
  templateUrl: './dashboard-user-details.component.html',
  styleUrls: ['./dashboard-user-details.component.css']
}) // need to implement?
export class DashboardUserDetailsComponent implements OnInit, CanDeactivateGuard {

  user: User;
  editName: string;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      const username = params['username'];

      this.service.getUser(username).then(user => {
        this.user = user;
        this.editName = user.name;
      });
    });
  }

  save(): void {
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }

  cancel(): void {
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate(): boolean {
    console.log('nav away');

    // if editName is not this.user.name
    if (this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    }

    return true;
  }

}
