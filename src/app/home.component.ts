import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  standalone: true,
  template: `<button (click)="increase()">{{ count() }}</button>`,
})
export class HomeComponent {
  count = signal(0);

  increase() {
    console.log(this.count());
    this.count.set(this.count() + 1);
  }
}
