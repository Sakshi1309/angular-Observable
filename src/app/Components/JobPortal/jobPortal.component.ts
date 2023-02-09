import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobPortal.component.html',
  styleUrls: ['./jobPortal.component.css'],
})
export class JobPortalComponent implements OnInit {
  constructor() {}

  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  preview = [];

  ngOnInit() {}

  onSave() {
    this.preview.push(this.jobForm.value);
    console.log(this.preview);
  }
}
