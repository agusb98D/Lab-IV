import { Injectable, inject } from '@angular/core';
import { Message } from '../shared/interfaces/message';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private PATH = 'message';
  private items$: Observable<Message[]>;
  private db = inject(AngularFireDatabase);

  constructor() {
    console.log('Los servicios son singleton por diseño. Esto significa que Angular instancia un único objeto del servicio y lo comparte en toda la aplicación');

    this.items$ = this.db.list(this.PATH).valueChanges() as Observable<Message[]>;
  }

  getAll() {
    return this.items$;
  }

  async set(model: Message) {
    model.code = this.db.createPushId().substring(0, 10);

    const path = `${this.PATH}/${model.code}`;
    return this.db.object(path).set(model);
  }
}
