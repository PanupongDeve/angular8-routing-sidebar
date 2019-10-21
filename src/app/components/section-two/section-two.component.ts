import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/globalVariable/sidebar/sidebar.service';
import { SidebarType } from '../../enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
    private route: Router
  ) { }

  ngOnInit() {
    console.log('ngOnInit_SectionTwoComponent');
    this.sidebarService.setSideBarType(SidebarType.SIDEBAR_2);
  }

  onClick() {
    this.sidebarService.setSideBarType(SidebarType.SIDEBAR_1);
    this.route.navigate(['']);
  }

}
