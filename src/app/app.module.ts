import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoteTakerComponent } from './components/vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';

import { SidebarService }  from './services/globalVariable/sidebar/sidebar.service';
import { MissionService } from './services/missionService/mission.service';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ProductListComponent,
    ProductAlertsComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissionControlComponent,
    AstronautComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarService, MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
