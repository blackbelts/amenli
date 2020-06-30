import { ContactusComponent } from './home/contactus/contactus.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { PlansComponent } from './compare-plans/plans/plans.component';
import { ComparePlansComponent } from './compare-plans/compare-plans.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseComponent } from './compare-plans/choose/choose.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InsuranceServicesComponent } from './insurance-services/insurance-services.component';
import { ComplaintsComponent } from './complaints/complaints.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'insurance', component: InsuranceServicesComponent},

  // {path: 'get_quote', component: QuotesComponent},
  {path: 'plan/choose/:company_name/:plan_selected/:brandId/:price', component: ComparePlansComponent},
  {path: 'checkout/payment/:company_name/:plan_selected/:brandId/:price/:imagePath', component: CheckoutComponent},
  {path: 'companies/choose/:brandId/:price', component: ChooseComponent},
  {path: 'plan/choose/:company_name/:plan_selected/:dob', component: ComparePlansComponent},
  {path: 'companies/choose/:dob', component: ChooseComponent},
  {path: 'complaints', component: ComplaintsComponent},
  {path: 'checkout/payment/:company_name/:plan_selected/:dob/:imagePath', component: CheckoutComponent},
  {path: 'thanks', component: ThankYouComponent},
  // {path: 'home/:section1', component: ContactusComponent}

];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  // scrollPositionRestoration: 'enabled',
  // scrollOffset: [0, 64]
  // enableTracing: true,

  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
