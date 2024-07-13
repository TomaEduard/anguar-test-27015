import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SliderComponent } from './slider/slider.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div @enter>
        <app-header></app-header>
        <app-slider></app-slider>
    </div>`,
  imports: [HeaderComponent, SliderComponent],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0, scale: 0.7 }),
        animate('400ms ease-in', style({ opacity: 1, scale: 1 }))
      ])
    ])
  ]
})
export class App {
}

setTimeout(() => {

  bootstrapApplication(App,{
    providers: [
      provideAnimations()
    ]
  });
  
}, 3000);