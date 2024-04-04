
import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
  providers: [
    ProdutoService
  ]
})
export class ListarProdutosComponent {
  produtos: Produto[] = [];

  constructor(private readonly produtoService: ProdutoService){
  }

  deletarProduto(event: any){
    if(confirm("Deseja Deletar esse Produto ?") == true){
      console.log("Deletado > OK", JSON.stringify(event))
      console.log("Teste", event.id)
    }
  }

  buscarProduto(){
    this.produtos.filter((element) => {
      element.nome == "Caderno"
      return element
    })
  }

  ngOnInit() {
    this.produtoService.listarProdutos()
      .subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        console.log(produtos);
      });
  }
}

// this.produtos = [{nome: "Caderno Naruto Shippuden", preco: 20}]
