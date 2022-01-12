import { Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {
  @Input() public set changeColor (value: boolean) {
    if (value) {
      this.renderer.setStyle(this.elementRef.nativeElement, "color", "red");
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2){
  }
}
