import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "react",
    loadChildren: () =>
      import("./reactive-form/reactive-form.module").then(
        m => m.ReactiveFormModule
      )
  },
  {
    path: "driven",
    loadChildren: () =>
      import("./template-driven-form/template-driven-form.module").then(
        m => m.TemplateDrivenFormModule
      )
  },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
