import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [BrowserModule],
  exports: [ReactiveFormComponent],
  providers: [],
  bootstrap: []
})
export class ReactiveFormModule {}
