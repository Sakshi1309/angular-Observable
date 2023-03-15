import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string = '';
  @Output() sendtoParentData = new EventEmitter();
  ngOnInit() {
    this.sendtoParentData.emit({
      name: 'Sakshi',
      lname: 'Kumari',
    });
  }
}
