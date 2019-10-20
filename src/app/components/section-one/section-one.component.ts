import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/globalVariable/sidebar/sidebar.service';
import { SidebarType } from '../../enums';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
    private route: Router
  ) { }

  ngOnInit() {
    console.log('ngOnInit_SectionOneComponent');
    // this.sidebarService.setSideBarType(SidebarType.SIDEBAR_1);
  }

  onClick() {
    this.sidebarService.setSideBarType(SidebarType.SIDEBAR_2);
    this.route.navigate(['/sec2']);
  }

}
