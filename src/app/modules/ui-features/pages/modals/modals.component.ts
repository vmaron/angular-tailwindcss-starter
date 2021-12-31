import {Component, OnInit} from '@angular/core';
import {NewsletterModalComponent} from '../../components/newsletter-modal/newsletter-modal.component';
import {DialogsService} from '../../../dialogs/dialogs.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  constructor(private dialogsService: DialogsService<NewsletterModalComponent>) {
  }

  ngOnInit(): void {
  }

  async openModal(): Promise<void> {
    const {NewsletterModalComponent} = await import(
      '../../components/newsletter-modal/newsletter-modal.component'
      );
    await this.dialogsService.open(NewsletterModalComponent);
  }
}
