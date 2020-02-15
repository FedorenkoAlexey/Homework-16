import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormModule } from "./reactive-form/reactive-form.module";
import { TemplateDrivenFormModule } from "./template-driven-form/template-driven-form.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormModule,
    TemplateDrivenFormModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
