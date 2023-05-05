import { Component, OnInit, Input } from '@angular/core';
import { ConteudoBotao } from 'src/app/interfaces/ConteudoBotao';

@Component({
  selector: 'app-button-geral',
  templateUrl: './button-geral.component.html',
  styleUrls: ['./button-geral.component.scss']
})
export class ButtonGeralComponent implements OnInit {

  @Input() contButton?: ConteudoBotao[]
  @Input() colorButton?: string
  @Input() pathClick?: string


  ngOnInit(): void {
    this.colorButton = "background: "+this.colorButton;
  }
}
