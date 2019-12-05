import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './table/table.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { User1Component } from './user1/user1.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FormComponent,
    PanelComponent,
    TableComponent,
    SliderComponent,
    ContactComponent,
    User1Component,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([

      {
        path:'Table',
        component:User1Component


      },
      {
        path:'gallery',
        component:PanelComponent


      },
      {
        path:'abt',
        component:FormComponent


      },
      
    ] )
















    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
