import {AfterViewInit, Component, HostBinding, OnInit, TemplateRef} from '@angular/core';
import {ModalConfig} from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  public config: ModalConfig;

  @HostBinding('class.show')
  public show = false;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => this.show = true);
  }

}
