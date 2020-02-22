import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";

import { CommonModule } from "@angular/common";
import { ReactiveFormRoutingModule } from "./reactive-form.routing.module";

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [ReactiveFormComponent, ReactiveFormRoutingModule],
  providers: [],
  bootstrap: []
})
export class ReactiveFormModule {}
