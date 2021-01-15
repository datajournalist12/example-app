import { Component, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';
// import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {

  subscription: Subscription;

  api_info: any;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.onMessage().subscribe(message => {
      this.api_info = message,
      console.log(message);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
