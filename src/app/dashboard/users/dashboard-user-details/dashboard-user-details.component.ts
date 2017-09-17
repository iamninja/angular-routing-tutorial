import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-dashboard-user-details',
  templateUrl: './dashboard-user-details.component.html',
  styleUrls: ['./dashboard-user-details.component.css']
})
export class DashboardUserDetailsComponent implements OnInit {

  user: User;

  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      const username = params['username'];

      this.service.getUser(username).then(user => {
        console.log(user);
        return this.user = user;
      });
    });
  }

}
