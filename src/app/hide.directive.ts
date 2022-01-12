import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[hide]'
})

export class HideDirective {
  @Input() public set hide(hideValue: boolean) {
    if(hideValue) {
      this.kek.createEmbeddedView(this.templateRef);
    } else {
      this.kek.clear();
    }
  }
  constructor (private templateRef: TemplateRef<any>,
    private kek: ViewContainerRef) {
  }
}
