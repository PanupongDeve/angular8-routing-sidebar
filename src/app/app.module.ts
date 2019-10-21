import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { SidebarService }  from './services/globalVariable/sidebar/sidebar.service';
import { MissionService } from './services/missionService/mission.service';
import { CartService } from './services/cartService/cart.service';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';

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
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SidebarService, MissionService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
