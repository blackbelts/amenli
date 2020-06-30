import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './primeNG.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateConfigModule } from './translate-config.module';



import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NavListComponent } from './navigation/nav-list/nav-list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CarInsuranceComponent } from './quotes/car-insurance/car-insurance.component';
import { MedicalInsuranceComponent } from './quotes/medical-insurance/medical-insurance.component';
import { LifeInsuranceComponent } from './quotes/life-insurance/life-insurance.component';
import { CollbrationsComponent } from './collbrations/collbrations.component';
import { CollbrationComponent } from './collbrations/collbration/collbration.component';
import { StepperComponent } from './stepper/stepper.component';
import { ComparePlansComponent } from './compare-plans/compare-plans.component';
import { CompareModalComponent } from './compare-plans/compare-modal/compare-modal.component';
import { PlansComponent } from './compare-plans/plans/plans.component';
import { BestPriceComponent } from './compare-plans/best-price/best-price.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentMethodComponent } from './checkout/payment-method/payment-method.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { NavLinksComponent } from './navigation/nav-links/nav-links.component';
import { HomeComponent } from './home/home.component';
import { VideoHeaderComponent } from './home/video-header/video-header.component';

import { StepsBookingComponent } from './home/steps-booking/steps-booking.component';
import { WhyComponent } from './home/why/why.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { PartnersComponent } from './home/partners/partners.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InsuranceServicesComponent } from './insurance-services/insurance-services.component';
import { ServicesComponent } from './home/services/services.component';

// services
import { QuotesService } from './quotes/shared/quotes.service';
import { CompareModelService } from './compare-plans/shared/compare-model.service';
import { CheckoutService } from './checkout/shared/checkout.service';
import { SharedService } from './shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ChooseComponent } from './compare-plans/choose/choose.component';
import { OdooService } from './shared/odoo.service';
import { UIService } from './shared/ui.service';
import { CollbrationsService } from './collbrations/collbrations.service';
import { MessageService } from 'primeng/api';
import { TranslateConfigService } from './shared/translate-config.service';
import { InsuranceService } from './insurance-services/insurance.service';
import { SliderComponent } from './home/slider/slider.component';
import { TypeInsuranceComponent } from './home/type-insurance/type-insurance.component';
import { ServiceGroupComponent } from './insurance-services/service-group/service-group.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MapComponent } from './home/map/map.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { QuoteTitleComponent } from './quote-title/quote-title.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    NavbarComponent,
    NavListComponent,
    QuotesComponent,
    CarInsuranceComponent,
    MedicalInsuranceComponent,
    LifeInsuranceComponent,
    CollbrationsComponent,
    CollbrationComponent,
    StepperComponent,
    ComparePlansComponent,
    CompareModalComponent,
    PlansComponent,
    BestPriceComponent,
    CheckoutComponent,
    PaymentMethodComponent,
    OrderSummaryComponent,
    ChooseComponent,
    NavLinksComponent,
    HomeComponent,
    VideoHeaderComponent,
    ServicesComponent,
    StepsBookingComponent,
    WhyComponent,
    TestimonialsComponent,
    PartnersComponent,
    ContactusComponent,
    FooterComponent,
    AboutusComponent,
    InsuranceServicesComponent,
    SliderComponent,
    TypeInsuranceComponent,
    ServiceGroupComponent,
    ComplaintsComponent,
    ThankYouComponent,
    MapComponent,
    SocialMediaComponent,
    QuoteTitleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateConfigModule
  ],
  providers: [InsuranceService, QuotesService, CompareModelService, CheckoutService, SharedService, OdooService, CollbrationsService, UIService, MessageService, TranslateConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
