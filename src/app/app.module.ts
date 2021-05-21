import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DisplayComponent } from './component/display/display.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    DisplayComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
