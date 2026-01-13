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
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      const id = params.get('id');
      console.log('Service Component initialized with ID:', id);
    });

    this.route.queryParamMap.subscribe((queryParams) => {
      console.log('Query Params:', queryParams);
    });

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
    this.httpService.getData('posts').subscribe((data: any) => {
      this.apiData = data.slice(0, 20);
      console.log('API Data fetched:', this.apiData);
    });
  }

  navItem(id: any) {
    console.log('Navigating to item with ID:', id);
    this.router.navigate(['/services', id]); ///services/1
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

    this.router.navigate(['/services', 1], {
      queryParams: { ref: 'update', success: true },
    });
  }

  deleteApiData() {
    this.httpService.deleteData('posts/1').subscribe((data) => {
      console.log('API Data deleted:', data);
    });
  }
}
