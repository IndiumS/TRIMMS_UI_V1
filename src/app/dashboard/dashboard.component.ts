import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  //@ViewChild('selComp') test: ElementRef | undefined;
  //@ViewChild('selComp') test: ElementRef | undefined;
  // @Input('selComp')
  // test!: string;

  @Input()
  selComp: string | undefined;
  sideMenuSelected: any = '';

  constructor() {
    
  }
  ngOnInit()
  {
   
  }
  ngOnChanges() { //when parent component changes are updated ngOnChanges detects
    this.sideMenuSelected = this.selComp;
    }
}
