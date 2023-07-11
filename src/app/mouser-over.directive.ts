import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appMouserOver]',
})
export class MouserOverDirective {
  constructor(private _el: ElementRef, private _render2: Renderer2) {}

  @HostListener('mouseover') onMouserOver() {
    this._render2.setStyle(this._el.nativeElement, 'backgroundColor', '#000');
    this._render2.setStyle(this._el.nativeElement, 'color', '#fff');
  }

  @HostListener('mouseleave') onMouserLeave() {
    this._render2.setStyle(
      this._el.nativeElement,
      'backgroundColor',
      '#ececec'
    );
  }
}
