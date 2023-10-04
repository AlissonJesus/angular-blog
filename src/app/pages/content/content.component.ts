import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/repository/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  coverContent: string = '';
  @Input()
  titleContent: string = '';
  @Input()
  descriptionContent: string = '';
  private id: number = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((valor) => {
      this.id = Number(valor.get('id'));
    });

    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: number): void {
    const result = dataFake.find((card) => card.id === id);
    if (result) {
      this.coverContent = result.photoCover;
      this.titleContent = result.title;
      this.descriptionContent = result.description
    }
  }
}
