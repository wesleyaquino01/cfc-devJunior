import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produtos';
import { environment } from 'src/environments/environment';
import { retry, catchError, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [];
  private apiUrl = environment.api;
  private produtosAtualizados = new EventEmitter<void>();
  public produtosAtualizadosSubject = new Subject<void>();
  // "http://localhost:5178/api/produtos"

  constructor(private http: HttpClient) {
  }

  get produtosAtualizadosEmitter(): Observable<void> {
    return this.produtosAtualizadosSubject.asObservable();
  }

  criarProduto(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Produto>(this.apiUrl + 'api/produtos', produto, {headers})
      .pipe(
        catchError(this.handleError),
        tap(() => this.produtosAtualizados.emit()),
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
    return this.http.get(`/api/produtos/${id}`)
  }
}
