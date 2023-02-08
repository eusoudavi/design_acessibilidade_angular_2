import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit{

  private firstFocusableElement: HTMLElement = null;
  private lastFocusabelElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) { }

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])
`);

    this.firstFocusableElement = focusableElements[0];
    this.lastFocusabelElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  public manageTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab'){
      return ;
    }

    if (event.shiftKey && document.activeElement === this.firstFocusableElement){
      this.lastFocusabelElement.focus(); // SE PRECIONAMOS TAB NO PRIMEIRO ELEMENTO, ELE TEM QUE IR PARA O ÚLTIMO
      event.preventDefault();
    } else if (document.activeElement === this.lastFocusabelElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }

  }

}
