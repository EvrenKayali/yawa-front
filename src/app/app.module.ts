import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoreComponent } from './core/core.component';
import { HomeModule } from './features/home/home.module';
import { VendorModule } from './features/vendor/vendor.module';

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
    VendorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
