import {Component, OnInit} from '@angular/core';
import {DialogsService} from '../../../dialogs/dialogs.service';
import {NewsletterDrawerComponent} from '../../components/newsletter-drawer/newsletter-drawer.component';

@Component({
  selector: 'app-drawers',
  templateUrl: './drawers.component.html',
  styleUrls: ['./drawers.component.scss']
})
export class DrawersComponent implements OnInit {

  constructor(private dialogsService: DialogsService<NewsletterDrawerComponent>) {
  }

  ngOnInit(): void {
  }

  async opeDrawer(): Promise<void> {
    const {NewsletterDrawerComponent} = await import(
      '../../components/newsletter-drawer/newsletter-drawer.component'
      );
    await this.dialogsService.open(NewsletterDrawerComponent);
  }

}
