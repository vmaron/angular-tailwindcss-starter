import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultipleValueTextInputComponent} from './components/multiple-value-text-input/multiple-value-text-input.component';
import {MultipleValueTextInputItemComponent} from './components/multiple-value-text-input-item/multiple-value-text-input-item.component';
import {FormsModule} from '@angular/forms';
import {AUTO_SIZE_INPUT_OPTIONS, AutoSizeInputOptions} from '../auto-size-input/auto-size-input.options';
import {AutoSizeInputModule} from '../auto-size-input/auto-size-input.module';



const CUSTOM_AUTO_SIZE_INPUT_OPTIONS: AutoSizeInputOptions = {
  extraWidth: 0,
  includeBorders: false,
  includePadding: true,
  includePlaceholder: true,
  maxWidth: -1,
  minWidth: -1,
  setParentWidth: false,
  usePlaceHolderWhenEmpty: false,
};

@NgModule({
  declarations: [
    MultipleValueTextInputComponent,
    MultipleValueTextInputItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoSizeInputModule
  ],
  providers: [
    { provide: AUTO_SIZE_INPUT_OPTIONS, useValue: CUSTOM_AUTO_SIZE_INPUT_OPTIONS }
  ],
  exports: [MultipleValueTextInputComponent, MultipleValueTextInputItemComponent]
})
export class MultivalueTextInputModule {
}
