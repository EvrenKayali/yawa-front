import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;
  users: any[] = [
    {
      subject: 1,
      name: "Nasut Evren Kayali",
      title: "Satinalma Muduru",
      img: "https://s.gravatar.com/avatar/d8c77d85c1541861c0650315b150f42d?s=200",
      email: "evrenkayali@hotmail.com",
      company: {
        name: "Pinar",
        type: "Processor",
      }
    },
    {
      subject: 2,
      name: "Mustafa Aksakal",
      title: "Satis Uzmani",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",
      email: "mustafa.aksakal@example.com",
      company: {
        name: "Et ve Balik",
        type: "Supplier",
      }
    }
  ];


  constructor() { }

  setUser(user: any) {

    this.currentUser = user;
  }

  getUser(): any {
    return this.currentUser;
  }

  getUsers(): any[] {
    return this.users;
  }
}
