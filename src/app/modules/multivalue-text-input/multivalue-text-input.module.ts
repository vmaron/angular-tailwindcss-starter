import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultipleValueTextInputComponent} from './components/multiple-value-text-input/multiple-value-text-input.component';
import {MultipleValueTextInputItemComponent} from './components/multiple-value-text-input-item/multiple-value-text-input-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MultipleValueTextInputComponent,
    MultipleValueTextInputItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MultipleValueTextInputComponent, MultipleValueTextInputItemComponent]
})
export class MultivalueTextInputModule {
}
