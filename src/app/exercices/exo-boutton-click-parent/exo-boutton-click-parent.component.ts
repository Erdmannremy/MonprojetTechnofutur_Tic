import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-boutton-click-parent',
  templateUrl: './exo-boutton-click-parent.component.html',
  styleUrls: ['./exo-boutton-click-parent.component.scss']
})
export class ExoBouttonClickParentComponent {
  handleButtonCLicked() : void{
    console.log("Le boutton a été cliqué !")
  }
}
