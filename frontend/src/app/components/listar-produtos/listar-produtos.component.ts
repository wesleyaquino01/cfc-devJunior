
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
  produtosFiltrados: Produto[] = [];
  filtroNome = '';

  constructor(private readonly produtoService: ProdutoService){
  }

  deletarProduto(event: any){
    if(confirm("Deseja Deletar esse Produto ?") == true){
      console.log("Deletado o Produto: ", JSON.stringify(event))
      console.log("Teste", event.id)
      alert("Produto Deletado com Sucesso!")
    }
  }

  buscarProduto() {

    if(!this.filtroNome){
      return alert("Digite o Nome do Produto Que Deseja Buscar!")
    }

    this.produtosFiltrados = this.produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );

    if (this.produtosFiltrados.length === 0) {
      alert("Produto não encontrado!");
    }
  }

  mostrarTodosProdutos(){
    this.produtosFiltrados = this.produtos;
    this.filtroNome = '';
  }


  ngOnInit() {
    this.produtoService.listarProdutos()
      .subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
      });
  }
}

