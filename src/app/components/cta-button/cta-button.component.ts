import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent {
  @Input() text: string = "";
  @Output() onClickEvent: EventEmitter<void> = new EventEmitter();

  onClickTriggered() {
    this.onClickEvent.emit()
  }


}
