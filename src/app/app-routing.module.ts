import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '' , component: SectionOneComponent },
  { path: 'sec2', component: SectionTwoComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
