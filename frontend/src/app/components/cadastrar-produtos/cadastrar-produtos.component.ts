import { Component, Input } from '@angular/core';
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
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  @Input() funcaoListar: any;

  formularioCadastrarProdutos = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(null,[Validators.required]),
  });

  constructor(private produtoService: ProdutoService){
  }

  ngOnInit(){
  }

  onSubmit(){
    const nome = this.formularioCadastrarProdutos.value.nome;
    const preco = this.formularioCadastrarProdutos.value.preco

    if(!nome || !preco){
      return alert('Preencha Todos os Campos!')
    }

    const produto = {nome, preco}

    this.produtoService.criarProduto(produto).subscribe(
      (produto: Produto) => {
        window.location.reload();
        alert(`Produto Cadastrado com Sucesso! ${JSON.stringify(produto)}`);
      }
    )
  }
}
