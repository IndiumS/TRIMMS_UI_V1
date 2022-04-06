import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
userName: any = '';
@Output() logOutDetails = new EventEmitter<any>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    curComp: any = '';
    isDashboardHide:boolean = false;
  constructor(private breakpointObserver: BreakpointObserver,private router: Router, private route: ActivatedRoute) {}
  sideMenuItemSel(val:string)
  {
    this.curComp = val;
  }
  
  ngAfterContentChecked()
  {
  this.userName = sessionStorage.getItem('username');
  }
  logOut()
  {
    this.userName = '';
    sessionStorage.clear();
    this.logOutDetails.emit(true);
  }
}
