import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../shared/interfaces/message';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MessageFirestoreService } from '../../services/message-firestore.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  protected message: string = '';
  protected items$: Observable<Message[]>;

  private messageSrv = inject(MessageFirestoreService);

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.items$ = this.messageSrv.getAll();
  }

  protected onSend() {
    const obj: Message = {
      code: '',
      content: this.message
    }

    this.messageSrv.agregarMensaje(obj).then(() => {
      console.log("enviado a Firebase con exito");
      this.message = '';
    })
  }
}
