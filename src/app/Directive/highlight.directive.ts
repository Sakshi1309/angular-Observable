import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirctive {
  constructor(public eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}

@Directive({
  selector: '[truncate]',
})
export class TruncateDirective {
  constructor(public eleRef2: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter(event) {
    // if (event) console.log(event);
    this.eleRef2.nativeElement.style.background = 'blue';
  }
}
