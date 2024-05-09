import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected message: string = 'Por defecto';

  private gitSrv = inject(GithubService);

  protected onBrn() {
    this.message = 'toqué el boton';

    this.gitSrv.getData();
  }
}
