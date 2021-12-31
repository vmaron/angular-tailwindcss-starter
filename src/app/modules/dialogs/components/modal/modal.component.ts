import {Component, Input} from '@angular/core';
import {DialogsService} from '../../dialogs.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T> {
  display = true;
  @Input() title: string;

  constructor(private dialogsService: DialogsService<T>) {
  }

  async close(): Promise<void> {
    this.display = false;
    await this.dialogsService.close();
  }
}
