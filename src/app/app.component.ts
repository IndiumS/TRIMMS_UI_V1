import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  isLoggedIn: boolean = false;
  
  getLoginDetails(val: any)
  {
    sessionStorage.setItem('username',val.username);
    this.isLoggedIn = true;
  }
  Loggedout(val:any)
  {
    if(val)
    this.isLoggedIn = false;
  }
}
