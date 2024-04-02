import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [];

  constructor(private http: HttpClient) {
  }

  listarProdutos(){
    return this.http.get<Produto[]>('api/produtos');
  }

  criarProduto(produto: Produto){
    this.http.post('/api/produtos', produto)
  }
}
