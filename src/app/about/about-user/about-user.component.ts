import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // grab the current username form route
    const username = this.route.snapshot.params['username'];

    this.userService.getUser(username)
      .then(user => this.user = user);

    console.log(this.user);
  }

  goBack(): void {
    // window.history.back();
    this.router.navigate(['/about']);
  }
}
