import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../shared/interfaces/message';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageFirestoreService {
  private PATH = 'mensajes';
  private items$: Observable<Message[]>;
  private db = inject(AngularFireDatabase);

  // permite interactuar con APIs u otros servicios web
  private http = inject(HttpClient);

  constructor() {
    console.log('Los servicios son singleton por diseño. Esto significa que Angular instancia un único objeto del servicio y lo comparte en toda la aplicación');

    this.items$ = this.db.list(this.PATH).valueChanges() as Observable<Message[]>;
  }

  public getAll() {

    const obs = this.http.get('https://api.github.com/users/agusb98');
    obs.subscribe(data => {
      console.log(data);

    })

    return this.items$;
  }

  public async agregarMensaje(objeto: Message) {
    objeto.code = this.db.createPushId().substring(0, 10);

    const path = `${this.PATH}/${objeto.code}`;
    return this.db.object(path).set(objeto);
  }
}
