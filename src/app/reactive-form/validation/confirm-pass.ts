import { FormGroup } from "@angular/forms";

export function MustMatch(group: FormGroup) {
  let pass = group.controls.pass.controls.password;
  let repeatPass = group.controls.pass.controls.repeatPass;

  if (pass.dirty && repeatPass.dirty) {
    if (pass.value !== repeatPass.value) {
      repeatPass.setErrors({ incorrect: true });
      // console.log(repeatPass);
    } else {
      repeatPass.setErrors(null);
      // console.log(repeatPass);
    }
  }
}
