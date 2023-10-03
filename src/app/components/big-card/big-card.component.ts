import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover: string = "https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png"
  @Input()
  titleCard: string = "Saiu a nova versão do Nodejs "
  @Input()
  descriptionCard: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto sit voluptates, molestias assumenda odio deserunt quae at, quo minus tenetur dolorem suscipit beatae rem inventore? Laborum aperiam reprehenderit provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto sit voluptates, molestias assumenda odio deserunt quae at, quo minus tenetur dolorem suscipit beatae rem inventore? Laborum aperiam reprehenderit provident."


}
