import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TemplateDrivenFormComponent } from "./template-driven-form.component";

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [BrowserModule],
  exports: [TemplateDrivenFormComponent],
  providers: [],
  bootstrap: []
})
export class TemplateDrivenFormModule {}
