import {AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild} from '@angular/core';
import {ModalRef, ModalService} from './shared/component/modal/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'a11y-p2';

  firstName = 'Davi';

  public modalRef: ModalRef;

  @ViewChild('modal')
  public modalTemplateRef: TemplateRef<any>;

  @ViewChild('template1')
  public template1: TemplateRef<any>;

  @ViewChild('template2')
  public template2: TemplateRef<any>;

  public selectedTemplate: TemplateRef<any>;

  constructor(
    private modalSerivice: ModalService,
    private cd: ChangeDetectorRef) {
  }

  public show(): void {
    this.selectedTemplate = this.template2;
    this.modalSerivice.open(
      {
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      }
    );
  }

  ngAfterViewInit(): void {
    this.selectedTemplate = this.template1;
    this.cd.detectChanges();
  }
}
