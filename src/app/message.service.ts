import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();

  getUrl(url: any) {
    return this.http.get(url);
  }

  sendMessage(message: any) {
        this.subject.next(message);
    }

  onMessage() {
    return this.subject.asObservable();
  }
}
