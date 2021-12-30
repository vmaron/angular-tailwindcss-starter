import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../../modal/modal.service';
import {NewsletterModalComponent} from '../../components/newsletter-modal/newsletter-modal.component';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  constructor(private modalService: ModalService<NewsletterModalComponent>) {
  }

  ngOnInit(): void {
  }

  async openModal(): Promise<void> {
    const {NewsletterModalComponent} = await import(
      '../../components/newsletter-modal/newsletter-modal.component'
      );
    await this.modalService.open(NewsletterModalComponent);
  }
}
