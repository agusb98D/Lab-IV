import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  private arr = [
    {key: 0, val: 'Inhabilitado'},
    {key: 1, val: 'Habilitado'},
  ]

  transform(key: number): string {
    const statusObj = this.arr.find(item => item.key == key);

    return statusObj ? statusObj.val : 'Otro Estado';
  }

}
