import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../services/rym.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [RymService]
})
export class ListaComponent implements OnInit{

  listaPersonajes: any[] = [];
personaje: any;

  constructor(
    private rymService: RymService,

  ){}
  ngOnInit(): void {
    this.rymService.getCharacters().subscribe(  (data: any) =>
    {   
      this.listaPersonajes = data['results']
      console.log(data);
    })
  }

}

