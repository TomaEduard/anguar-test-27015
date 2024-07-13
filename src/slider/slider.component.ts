import { NgTemplateOutlet } from "@angular/common";
import { Component, afterNextRender, signal } from "@angular/core";
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideAnimation } from "../animations/slide.animation";
import { ShareComponent } from "./share/share.component";
import { DescriptionFormComponent } from "./description-form/description-form.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  imports: [ NgTemplateOutlet, ShareComponent, DescriptionFormComponent ],
  animations: [
    trigger('slideToggle', [
      transition('* => *', [
        useAnimation(slideAnimation)
      ])
    ])
  ]
})
export class SliderComponent {
  protected selectedImage = signal(1);
  protected animationDirection = signal<'right' | 'left'>('right');
  protected animationDisabled = signal(true);

  constructor() {
    afterNextRender(() => {
      if (this.animationDisabled()) {
        this.animationDisabled.set(false);
      }
    });
  }

  protected previous() {
    if (this.selectedImage() > 1) {
      this.animationDirection.set('left');
      this.selectedImage.set(this.selectedImage() - 1);
    }
  }

  protected next() {
    if (this.selectedImage() < 4) {
      this.animationDirection.set('right');
      this.selectedImage.set(this.selectedImage() + 1);
    }
  }

  protected animationEvent(state: 'start' | 'done') {
    console.log(`slideToggle: ${state}`);
  }
}
