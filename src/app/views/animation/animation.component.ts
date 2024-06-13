import { AnimationEvent, animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

// Metodo 1
const mostrarOcultar1 = trigger('mostrarOcultarTrigger', [
  state(
    'abierto',
    style({ opacity: 1 })
  ),
  state(
    'cerrado',
    style({ opacity: 0 })
  ),
  transition('abierto => cerrado', [animate('1s')]),
  transition('cerrado => abierto', [animate('0.5s')]),
]);

// Metodo 2
const mostrarOcultar2 = [
  trigger('mostrarOcultarTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0.5s', style({ opacity: 0 }))
    ])
  ])
]

@Component({
  selector: 'app-animation',
  standalone: true,
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations:[mostrarOcultar1]
})
export class AnimationComponent {

  mostrarContenido: boolean = false;

  mostrarOcultar() {
    this.mostrarContenido = !this.mostrarContenido;
  }

  protected onAnimation(event: AnimationEvent) {
    console.log(event);

  }
}
