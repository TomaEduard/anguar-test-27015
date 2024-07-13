import { Component } from "@angular/core";
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-description-form',
  templateUrl: './description-form.component.html',
  styleUrl: './description-form.component.scss',
  standalone: true,
  imports: [ TextFieldModule ]
})
export class DescriptionFormComponent {
}
