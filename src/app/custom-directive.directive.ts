import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true,
})
export class CustomDirectiveDirective {
  // constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightblue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }
}
