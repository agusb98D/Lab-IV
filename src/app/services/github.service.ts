import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private http = inject(HttpClient);

  getData() {
    const obs = this.http.get('https://api.github.com/users/agusb98');

    obs.subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('error');

      }
    )
  }
}
