import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exo-boutton-click',
  templateUrl: './exo-boutton-click.component.html',
  styleUrls: ['./exo-boutton-click.component.scss']
})
export class ExoBouttonClickComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleButtonClick() : void {
    // 2mettre un évenement lorque le button est cliqué
    this.buttonClicked.emit();

  }

  constructor() {}
}
