import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGithubLinkStyle]'
})
export class GithubLinkStyleDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'github_link');
  }
}


