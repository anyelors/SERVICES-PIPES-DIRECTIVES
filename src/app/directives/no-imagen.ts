import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoImagen]',
})
export class NoImagen {

  private _nodoDOM: ElementRef = inject(ElementRef);
  private _renderer2: Renderer2 = inject(Renderer2);

  @HostListener('error')
  onError(): void {
    this._renderer2.setAttribute(this._nodoDOM.nativeElement, 'src', 'img/no-disponible.avif');
  }



}
