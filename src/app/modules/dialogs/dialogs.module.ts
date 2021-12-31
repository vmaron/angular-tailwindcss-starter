import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';
import {DrawerComponent} from './components/drawer/drawer.component';


@NgModule({
  declarations: [ModalComponent, DrawerComponent],
  imports: [CommonModule],
  exports: [ModalComponent, DrawerComponent],
})
export class DialogsModule {
}
