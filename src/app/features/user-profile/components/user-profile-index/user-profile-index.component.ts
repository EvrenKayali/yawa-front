import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-index',
  templateUrl: './user-profile-index.component.html',
  styleUrls: ['./user-profile-index.component.scss']
})
export class UserProfileIndexComponent implements OnInit {

  currentUser: any;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

}
