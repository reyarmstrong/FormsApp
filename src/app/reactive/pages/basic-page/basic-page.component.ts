import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  standalone: false,

  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.myForm = this.fb.group({
      name: [''],
      price: [0],
      inStorage: [0]
    });

  }

  onSave(): void {
    console.log(this.myForm.value);
  }


}
