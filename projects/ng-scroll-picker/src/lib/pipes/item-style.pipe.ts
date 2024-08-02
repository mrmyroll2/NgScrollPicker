import { Pipe, PipeTransform } from '@angular/core';


interface RotateStyle {
  transform?: string;
  opacity?: string;
  transition?: string;
  color?: string;
}

@Pipe({
  name: 'itemStyle',
  standalone: true
})
export class ItemStylePipe implements PipeTransform {
  private itemPerDegree = 23;

  transform(current: number, options: { index: number; draggable: boolean }): RotateStyle {
    let rotateStyle: RotateStyle = {};
    const gapCount = current - options.index;
    if (Math.abs(gapCount) < 90 / this.itemPerDegree) {
      rotateStyle['transform'] = 'rotateX(' + gapCount * this.itemPerDegree + 'deg) translate3d(0, 0, 5.625em)';
      rotateStyle['opacity'] = `${1 - Math.abs(gapCount) / (90 / this.itemPerDegree)}`;
      if (!options.draggable) {
        rotateStyle['transition'] = `transform 150ms ease-out`;
      }
      return rotateStyle;
    }
    if (gapCount > 0) {
      return {transform: 'rotateX(90deg) translate3d(0, 0, 5.625em)'};
    }
    return {transform: 'rotateX(-90deg) translate3d(0, 0, 5.625em)'};
  }

}
