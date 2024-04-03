import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';
import { Produto } from 'src/app/interfaces/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss'],
  providers: [
    provideNgxMask(),
  ]
})
export class CadastrarProdutosComponent {
  // private id = 0;
  formularioCadastrarProdutos = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(null,[Validators.required]),
  });
  
  constructor(private produtoService: ProdutoService){
  }
  
  onSubmit(){
    const nome = this.formularioCadastrarProdutos.value.nome;
    const preco = this.formularioCadastrarProdutos.value.preco

    //Validação ser é nulo ou undefined
    if(!nome || !preco){
      return alert('Digite o Nome e o Preço')
    }


    // this.id++;
    // const produto = {id: this.id,nome, preco}
    const produto = {nome, preco}
    console.log(produto);

    this.produtoService.criarProduto(produto).subscribe(
      (produto: Produto) => {
        console.log(produto);
      }
    )
  }


}
