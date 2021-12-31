import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../../dialogs/components/modal/modal.component';


@Component({
  selector: 'app-newsletter-modal',
  templateUrl: './newsletter-modal.component.html',
  styleUrls: ['./newsletter-modal.component.scss']
})
export class NewsletterModalComponent implements OnInit {
  @ViewChild('modalComponent') modal:
    | ModalComponent<NewsletterModalComponent>
    | undefined;

  newsletterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.newsletterForm = this.fb.group({
      username: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  async createRecord(): Promise<void> {
    console.log(this.newsletterForm.value);

    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

  ngOnInit(): void {
  }
}
