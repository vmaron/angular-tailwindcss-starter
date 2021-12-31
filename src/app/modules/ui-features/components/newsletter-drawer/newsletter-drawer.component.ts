import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../../dialogs/components/modal/modal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newsletter-drawer',
  templateUrl: './newsletter-drawer.component.html',
  styleUrls: ['./newsletter-drawer.component.scss']
})
export class NewsletterDrawerComponent implements OnInit {

  @ViewChild('drawerComponent') modal: | ModalComponent<NewsletterDrawerComponent> | undefined;
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
