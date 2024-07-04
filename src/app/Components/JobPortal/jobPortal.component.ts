import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobPortal.component.html',
  styleUrls: ['./jobPortal.component.css'],
})
export class JobPortalComponent implements OnInit {
  constructor() {}

  todayDate = new Date();
  jobForm = new FormGroup({
    firstName: new FormControl('', Validators.pattern('[A-Z]{3}')),
    lastName: new FormControl(
      '',
      Validators.pattern('[A-Z]{3}-[0-9]{5}-[0-9]{2}')
    ),
    submitDate: new FormControl(this.todayDate, Validators.required),
  });

  preview = [];

  ngOnInit() {}

  check() {}

  onSave() {
    this.preview.push(this.jobForm.value);
    console.log(this.jobForm);
  }
  resetForm() {
    this.jobForm.reset();
    this.preview = [];
  }
}
