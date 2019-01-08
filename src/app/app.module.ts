import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoreComponent } from './core/core.component';
import { HomeModule } from './features/home/home.module';
import { VendorModule } from './features/vendor/vendor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './features/auth/auth.module';
import { UserProfileModule } from './features/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    VendorModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    UserProfileModule.forRoot(),
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
