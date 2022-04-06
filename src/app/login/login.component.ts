import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  
  @Output() loginDetails = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  login()
  {
   if(this.username && this.password)
   {
     this.loginDetails.emit({username:this.username,password: this.password});
   }
  }
}
