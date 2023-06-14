import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Example } from './example.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private apiUrl = `${environment.apiUrl}/examples`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Example[]> {
    return this.http.get<Example[]>(this.apiUrl);
  }

  create(example: Example): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.apiUrl}/add`, example);
  }
}
