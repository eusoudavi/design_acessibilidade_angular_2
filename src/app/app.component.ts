import {Component, TemplateRef, ViewChild} from '@angular/core';
import {fade} from './shared/animations/fade';
import {ModalService} from './shared/component/modal/services/modal.service';
import {ModalRef} from './shared/component/modal/models/model-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  firstName = 'Davi';
  public modalRef: ModalRef;
  public info = false;

  constructor(private modalService: ModalService) {}


  public show(): void {
    this.modalRef = this.modalService.open(
      {
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      });
  }
}
