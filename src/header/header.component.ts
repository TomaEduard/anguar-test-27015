import {Component, signal} from "@angular/core";
import {NavComponent} from "../nav/nav.component";
import {transition, trigger, useAnimation} from "@angular/animations";
import {slideAnimation} from "../animations/slide.animation";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NavComponent],
  animations: [
    trigger('slideToggle', [
      transition('* => *', [
        useAnimation(slideAnimation)
      ])
    ])
  ]
})
export class HeaderComponent {
  protected showMenu = signal(false);
}
