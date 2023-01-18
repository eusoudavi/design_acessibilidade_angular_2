import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ModalRef, ModalService} from './shared/component/modal/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p2';

  firstName = 'Davi';

  public modalRef: ModalRef;

  @ViewChild('modal')
  public modalTemplateRef: TemplateRef<any>;

  constructor(private modalSerivice: ModalService) {
  }

  public show(): void {
    this.modalSerivice.open(
      {
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      }
    );
  }
}
