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

  preview: string = '';

  ngOnInit() {}

  onSave() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
}
