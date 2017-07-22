import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpWrapper {

  constructor(private http: Http) {
  }

  get<T>(url: string): Observable<T> {
    return this.http.get(url).map(response => this.mapResponse(response));
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post(url, body).map(response => this.mapResponse(response));
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put(url, body).map(response => this.mapResponse(response));
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete(url).map(response => this.mapResponse(response));
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch(url, body).map(response => this.mapResponse(response));
  }

  private mapResponse<T>(response: Response): T {
    return response.json();
  }
}
