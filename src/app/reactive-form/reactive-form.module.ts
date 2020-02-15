import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material/core";

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  exports: [ReactiveFormComponent, MatInputModule],
  providers: [
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: []
})
export class ReactiveFormModule {}
