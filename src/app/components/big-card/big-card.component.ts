import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  id: string = '1';
  @Input()
  photoCover: string = 'https://s2-techtudo.glbimg.com/LseZBAXgGhibUHWzyDc_FQ2_BA8=/0x0:995x560/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/J/6/OYDoBRSfOFGfZkQ8wbBg/captura-de-tela-2020-06-26-as-13.00.25.png';
  @Input()
  titleCard: string = 'Homen de ferro é o cara';
  @Input()
  descriptionCard: string = 'Homem de ferro um heró a ser reconhecido, salvo a humanidade diversas vezes, porém não vem sendo reconhecido';
  
}
