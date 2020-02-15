import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [ReactiveFormComponent],
  providers: [],
  bootstrap: []
})
export class ReactiveFormModule {}
