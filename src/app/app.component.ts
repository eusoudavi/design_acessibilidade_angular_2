import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {fade} from './shared/animations/fade';
import {ModalService} from './shared/component/modal/services/modal.service';
import {ModalRef} from './shared/component/modal/models/model-ref';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit{
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  firstName = 'Davi';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder) {}


  public show(): void {
    this.modalRef = this.modalService.open(
      {
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Davi', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    });
  }
}
