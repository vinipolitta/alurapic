import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from 'src/app/models/photos.model';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  form!: FormGroup;
  filter!: string;
  debounce: Subject<string> = new Subject<string>();
  hasMore = true
  currentPage: number = 1
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.photos = this.activatedRoute.snapshot.data['photos']
    this.formulario();
    this.debounce.pipe(debounceTime(300)).subscribe(res => {
      this.filter = res
    })
  }

  load() {
    this.service.getPhotosPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if (!photos.length) {
        this.hasMore = false;
      }
    })
  }

  formulario() {
    this.form = this.fb.group({
      filter: ['']
    })
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
