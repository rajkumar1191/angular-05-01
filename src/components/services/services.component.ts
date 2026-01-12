import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [HttpService],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  @Output() serviceList: EventEmitter<string[]> = new EventEmitter<string[]>();

  contactForm: any = new FormGroup({});

  apiData: any;

  constructor(private httpService: HttpService) {}
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

  addSkill() {
    const skills = this.contactForm.get('skills') as FormArray;
    skills.push(new FormControl(''));
  }

  handleClick() {
    const services = ['Web Development', 'App Development', 'SEO Optimization'];
    this.serviceList.emit(services);
  }

  submitForm() {
    console.log(
      'Form Submitted!',
      this.contactForm.value,
      this.contactForm.valid
    );
  }

  fetchApiData() {
    this.httpService.getData('posts').subscribe((data) => {
      this.apiData = data;
      console.log('API Data fetched:', this.apiData);
    });
  }

  postApiData() {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    this.httpService.postData('posts', postData).subscribe((data) => {
      console.log('API Data posted:', data);
    });
  }

  updateApiData() {
    const updateData = {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };
    this.httpService.updateData('posts/1', updateData).subscribe((data) => {
      console.log('API Data updated:', data);
    });
  }

  deleteApiData() {
    this.httpService.deleteData('posts/1').subscribe((data) => {
      console.log('API Data deleted:', data);
    });
  }
}
