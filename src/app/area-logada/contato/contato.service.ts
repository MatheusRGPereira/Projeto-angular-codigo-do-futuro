import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  API_URL = environment.API_URL;



  constructor(private http: HttpClient) { }


 public getContato(){
  return this.http.get<Contato[]>(`${this.API_URL}/contatos`)
  }

  public getContatoById(id: string){
    return this.http.get<Contato>(`${this.API_URL}/contatos/${id}`)
  }

  createContato(contato: Contato){
    return this.http.post<Contato>(`${this.API_URL}/contatos` , contato)
  }

  updateContato(id: string, contato:Contato){
    return this.http.put<Contato>(`${this.API_URL}/contatos/${id}`, contato)
  }

  deleteContato(id:string){
    return this.http.delete<Contato>(`${this.API_URL}/contatos/${id}`)
  }
}
