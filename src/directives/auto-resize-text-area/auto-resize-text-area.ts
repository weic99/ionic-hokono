import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'ion-textarea[auto-resize-text-area]' // Attribute selector
})
export class AutoResizeTextAreaDirective {

  @HostListener("input", ["$event.target"])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    this.adjust();
  }

  adjust(): void {
    let ta = this.element.nativeElement.querySelector("textarea");
    if (ta) {
      ta.style.overflow = "hidden";
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
  }

}
