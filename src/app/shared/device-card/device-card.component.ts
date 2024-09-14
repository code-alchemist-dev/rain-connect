import { Component, inject, Input, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface CardDetails {
  id: string;
  name: string;
}

@Component({
  selector: 'app-device-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './device-card.component.html',
  styleUrl: './device-card.component.css',
})
export class DeviceCardComponent {

  @Input()
  id: string = '';
  @Input()
  name: string = '';
  changeName = output<CardDetails>();

  editMode = false;

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: [this.name, Validators.required],
  });

  onSubmit() {
    this.changeName.emit({id: this.id, name: this.form.value.name?? ''});
  }
}
