import {Component, HostBinding, OnInit, TemplateRef} from '@angular/core';
import {ModalConfig} from './interfaces/modal-config';
import {fade} from '../../animations/fade';
import {ModalRef} from './models/model-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;  // AQUI ESTAMOS PASSANDO O FADE PARA TODO O HOST DO MODAL
  public config: ModalConfig;
  public modalRef: ModalRef;

  constructor() { }

  ngOnInit(): void {
  }

}
