import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirctive {
  constructor(public eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}


@Directive({
  selector: '[truncate]'
})

export class TruncateDirective {
  constructor() {}
  

}