import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent {
  produtos: Produto[] = [];
  
  constructor(private produtoService: ProdutoService){
  }
  
  ngOnInit(){
    this.produtos = [{nome: "Caderno Naruto Shippuden", preco: 20}]
    this.produtoService.listarProdutos();
  }

}
