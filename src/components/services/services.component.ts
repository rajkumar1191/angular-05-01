import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  @Output() serviceList: EventEmitter<string[]> = new EventEmitter<string[]>();

  contactForm: any = new FormGroup({});

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      skills: new FormArray([], Validators.required),
    });
  }

  handleSetandPatch() {
    // Set Value
    this.contactForm.setValue({
      name: 'John Doe',
      email: '',
      message: 'Hello, this is a message.',
    });

    this.contactForm.get('name').setValue('Jane Smith');

    // Patch Value
    this.contactForm.patchValue({
      email: 'rema1191@gmail.com',
    });

    this.contactForm.get('message').patchValue('This is a patched message.');
  }

  get skills() {
    return this.contactForm.get('skills') as FormArray;
  }

  addSkill(){
    const skills = this.contactForm.get('skills') as FormArray;
    skills.push(new FormControl(''));
  }


  handleClick() {
    const services = ['Web Development', 'App Development', 'SEO Optimization'];
    this.serviceList.emit(services);
  }

  submitForm(){
    console.log('Form Submitted!', this.contactForm.value, this.contactForm.valid);
  }
}
