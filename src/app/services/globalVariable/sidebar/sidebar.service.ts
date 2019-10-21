import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { SidebarType } from '../../../enums';

@Injectable({
	providedIn: 'root'
})

export class SidebarService {
	private sideBarType: BehaviorSubject<SidebarType> = new BehaviorSubject<SidebarType>(SidebarType.SIDEBAR_1);

	constructor() { }

	getSideBarType(): BehaviorSubject<SidebarType> {
		return this.sideBarType;
	}

	setSideBarType(sideBarType: SidebarType): void {
		this.sideBarType.next(sideBarType);
	}
	
}
