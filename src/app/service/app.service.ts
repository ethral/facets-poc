import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  isSpinnerEnable = new Subject<boolean>();

  public enableSpinner(): void {
    this.isSpinnerEnable.next(true);
  }

  public disableSpinner(): void {
    this.isSpinnerEnable.next(false);
  }
}
