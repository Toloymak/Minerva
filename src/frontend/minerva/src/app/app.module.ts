import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { LoginComponent } from './components/login/login.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { GuestTopNavComponent } from './layout/guest/guest-top-nav/guest-top-nav.component';
import { GuestFooterComponent } from './layout/guest/guest-footer/guest-footer.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageContentComponent,
    GuestTopNavComponent,
    GuestFooterComponent,
    GuestLayoutComponent,
    LandingPageComponent,
    AuthorisedSideNavComponent,
    AuthorisedLayoutComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
