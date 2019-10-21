import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';


import { SidebarService }  from './services/globalVariable/sidebar/sidebar.service';
import { SidebarType } from './enums';

interface SideBarTypeObject {
  SIDEBAR_1: SidebarType,
  SIDEBAR_2: SidebarType,
  SIDEBAR_3: SidebarType
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  sideBarType: SidebarType = SidebarType.SIDEBAR_1;
  selectedClass: string = 'sec-1__active';
  sideBarChecker: SideBarTypeObject = {
    SIDEBAR_1: SidebarType.SIDEBAR_1,
    SIDEBAR_2: SidebarType.SIDEBAR_2,
    SIDEBAR_3: SidebarType.SIDEBAR_3,
  }

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('ngOnInit_app');
   
    
    setTimeout(() => {
      this.handleSubscripeSidebar();
    }, 5)
    
  }


  ngOnDestroy() {
    this.sidebarService.getSideBarType().unsubscribe();
  }

  handleSubscripeSidebar() {
    const sideBarTypeSub = this.sidebarService.getSideBarType();

    sideBarTypeSub.subscribe(
      sideBarType => {
        this.sideBarType = sideBarType
      },
      undefined
    );

  }

  handleSelectClass = (sidebarChecker: SidebarType): string => {
    if (sidebarChecker === this.sideBarType) {
      return 'sidebar-active';
    } 
    
  }

  handelCheckSideBarTypeByRoute = (): SidebarType => {
    const pathName = window.location.pathname;
    if (pathName === '/') {
      return SidebarType.SIDEBAR_1;
    } else if (pathName === '/sec2') {
      return SidebarType.SIDEBAR_2;
    }

    
  }



}
