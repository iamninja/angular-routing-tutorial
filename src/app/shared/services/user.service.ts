import { Injectable } from '@angular/core';

import { User } from '../models/user';


const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN_400x400.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
]);

@Injectable()
export class UserService {

  // Get all users
  getUsers(): Promise<User[]> {
    return usersPromise;
  }

  // Get specific user
  getUser(username): Promise<User> {
    return usersPromise
      .then(users => users.find(user => user.username === username));
  }

}
