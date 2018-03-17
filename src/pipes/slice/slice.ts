import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SlicePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }

  slice: number = 10;
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.slice += 5;
      infiniteScroll.complete();
    }, 200);

  }
}
