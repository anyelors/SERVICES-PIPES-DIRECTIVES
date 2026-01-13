import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFondoAmarillo]',
})
export class FondoAmarillo implements OnInit{

  private _nodoDOM: ElementRef = inject(ElementRef);
  private _renderer2: Renderer2 = inject(Renderer2);

  ngOnInit(): void {
    this._renderer2.setStyle(this._nodoDOM.nativeElement, 'backgroundColor', 'yellow');

  }

}
