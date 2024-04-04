import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produtos';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = environment.api;
  produtos: Produto[] = [];
  produtosService: Produto[] = [];

  constructor(private http: HttpClient) {
  }


  getter(){
    return this.produtosService
  }

  setter(value: any){
    this.produtosService=value;
  }


  criarProduto(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Produto>(this.apiUrl + 'api/produtos', produto, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    throw error;
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + 'api/produtos');
  }

  listarProdutoPorId(id: number){
    return this.http.get(this.apiUrl + `api/produtos/${id}`)
  }

  deletarProdutoPorId(id: number){
    return this.http.delete(this.apiUrl + `api/produtos/${id}`)
  }

}
