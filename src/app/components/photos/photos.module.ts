import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoListModule } from './photo-list/photo-list.module';



@NgModule({
  declarations: [
    PhotoComponent,
    PhotoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotoListModule
  ],
  exports: [
    PhotoComponent,
    PhotoFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotosModule { }
