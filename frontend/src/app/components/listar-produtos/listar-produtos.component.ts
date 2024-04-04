
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      this.produtoService.deletarProdutoPorId(event.id).subscribe({
        next: data => {
            this.carregarProdutos();
            alert('Produto Deletado com Sucesso!')
        },
        error: error => {
          alert(`${error}`);
        }
    });
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
    this.produtoService.setter(this.carregarProdutos())
  }

  carregarProdutos(){
    this.produtoService.listarProdutos()
    .subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      return this.produtosFiltrados = produtos;
    });
  }

}

