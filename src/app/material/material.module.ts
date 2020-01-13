import { NgModule } from '@angular/core';
import {MatAutocompleteModule, MatButtonModule, MatInputModule, MatProgressBarModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
