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

  criarProduto(produto: Produto){
    // this.http.post('/api/produtos', produto)
    this.produtos = [{nome: produto.nome, preco: produto.preco}]
  }
  
  listarProdutos(){
    // return this.http.get<Produto[]>('api/produtos');
    console.log(this.produtos)
    return this.produtos;
  }

  listarProdutoPorId(id: number){
    return this.http.get(`/api/produtos/${id}`)
  }

  
}
