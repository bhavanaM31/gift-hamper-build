import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ComponentsModule } from '../components/components.module';
import { AboutUsComponent } from '../about-us/about-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ComponentsModule
  ]
})
export class HeaderModule { }
