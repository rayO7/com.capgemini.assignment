import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight1]'
})
export class Highlight1Directive {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.backgroundColor="lightblue"
   }

}
