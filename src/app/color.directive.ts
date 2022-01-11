import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.body.backgroundColor = 'red';
  }
}
