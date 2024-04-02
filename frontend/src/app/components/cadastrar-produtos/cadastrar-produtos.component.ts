import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/interfaces/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss']
})
export class CadastrarProdutosComponent {

  formularioCadastrarProdutos = new FormGroup({
    nome: new FormControl(),
    preco: new FormControl(),
  });


  constructor(private produtoService: ProdutoService){
  }


  onSubmit(){
    const nome = this.formularioCadastrarProdutos.value.nome;
    const preco = this.formularioCadastrarProdutos.value.preco
    const dado = {nome, preco}
    this.produtoService.criarProduto(dado);
  }


}
