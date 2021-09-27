import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  dataUrl= 'assets/data.json';
  data: Array<Usuarios> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.getData()
  }

  getData() {
    this.http.get(this.dataUrl).subscribe((data:any) => {
      this.data = data;
      this.showEmails();
    });
  }

  showEmails(){
    this.data.map(
      (item: any) => console.log(item.email));
  }
}
