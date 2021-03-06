import {BaseException} from 'angular2/src/core/facade/lang';
import {bootstrap} from 'angular2/bootstrap';
import {Component, View} from 'angular2/core';

@Component({
  selector: 'error-app',
})
@View({
  template: `
           <button class="errorButton" (click)="createError()">create error</button>`
})
export class ErrorComponent {
  createError(): void { throw new BaseException('Sourcemap test'); }
}

export function main() {
  bootstrap(ErrorComponent);
}
