import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private fb = inject(FormBuilder);
  protected form: FormGroup;

  ngOnInit(): void {
    const required = Validators.required;

    this.form = this.fb.group({
      email: new FormControl(null, Validators.compose([required, this.spacesValidator])),
      password: new FormControl(null, Validators.compose([required])),
    });
  }

  private spacesValidator(control: AbstractControl): null | object {
    const str = <string>control.value;
    const spaces = str.includes(' ');

    if (spaces) {
      return { contieneEspacios: { cantidadDeEspacios: 5 } };
    } else {
      return null;
    }
  }

  protected onSubmit() {
    if (this.hasErrors()) { return; }

    const model = this.form.value;
    console.log(model);
  }

  private hasErrors(): boolean {
    this.form.markAllAsTouched();

    return this.form.invalid;
  }

}
