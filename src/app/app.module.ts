import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './color.directive';
import { HideDirective } from './hide.directive';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ChangeColorDirective,
    HideDirective,
    CapitalizePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
