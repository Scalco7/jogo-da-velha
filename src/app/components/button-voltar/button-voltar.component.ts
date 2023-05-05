import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-voltar',
  templateUrl: './button-voltar.component.html',
  styleUrls: ['./button-voltar.component.scss']
})
export class ButtonVoltarComponent {
  @Input() pathToBack?: string
}
