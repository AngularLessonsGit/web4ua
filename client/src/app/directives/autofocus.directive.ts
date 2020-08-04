import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  private autofocusRef;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.autofocusRef || typeof this.autofocusRef === 'undefined') {
      this.el.nativeElement.focus();
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.autofocusRef = condition !== false;
  }

}
