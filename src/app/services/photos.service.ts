import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photos.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private urlAPI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getPhotos(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.urlAPI}/${username}/photos`);
  }

  getPhotosPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString())
    return this.http.get<Photo[]>(`${this.urlAPI}/${username}/photos`, { params });
  }
}
