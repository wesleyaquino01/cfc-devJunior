# Como Rodar o BackEnd 

## 1° Copile a solução
    backend.sln

## 2° instalar os pacotes do NuGet
    dotnet restore

## 3° Compilar o Projeto 
    dotnet build

## 4° Executar o Projeto
    dotnet run 

> Se você tiver algum erro ao executar os comandos, verifique se você instalou o .NET SDK e o NuGet.

# Como Rodar o FrontEnd 

## 1º clone o projeto na sua máquina

    git clone 

## 2º navege para pasta que foi criada

    cd nome_da_pasta

## 3º Instale todas as dependências

    npm install 

## 4º rode o projeto
    npm start ou ng server    

# Ferramentas 🧰

## Frontend
    
    node v18.18.0
    npm 10.3.0
    Angular versão 16.0.0
    Angualar CLI
    
### Pacotes
    Angular Material
    ngx-mask

## Backend 
    .Net 8.0
    Visual Studio 2022

### Pacotes
    Microsoft.AspNetCore.Cors
    Microsoft.EntityFrameworkCore.InMemory
    Entity Framework Core
    NUnit.Framewor

#  Backlog

## Parte 1

    Backend com ASP.NET Core Objetivo: Criar uma API simples utilizando ASP.NET Core para gerir um catálogo de produtos. 

    Requisitos:

    Modelo de Dados: Criar uma classe de produto em C# com propriedades: ID (único), Nome e Preço.

    Validação: Implementar validação básica para o Nome e Preço usando Data Annotations.

    Persistência: Utilizar o Entity Framework Core com uma base de dados em memória para simplificar.

    Testes Unitários: Desenvolver um teste unitário para verificar se a criação de um produto funciona corretamente.
        
## Parte 2: 
    Frontend com Angular Objetivo: Construir uma interface simples com Angular para interagir com a API. Requisitos:

    Páginas: Implementar uma página para listar produtos e um formulário simples para cadastro.

    Estilização: Utilizar CSS básico ou Bootstrap para estilização.

## Critérios de Avaliação:

    Qualidade do Código: Clareza e organização do código em C# e TypeScript.

    Funcionalidade: A aplicação deve funcionar conforme os requisitos básicos.

    Documentação: Fornecer instruções simples de como executar a aplicação.
        
## Desafios Adicionais (Opcionais):
    Listagem Simples: Criar uma rota para listar todos os produtos.
