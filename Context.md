
Projeto em Node.js para consumo de API do Ifood


## Pastel do Godofredo

> Contexto:

Uma rede de pastelaria deseja automatizar seu processo de pedidos, clientes e pastéis,
até então antes era tudo feito com base em papel e caneta, agora com a chegada do IFood a
gerência percebeu que poderiam aumentar expressivamente seu lucro real se disponibilizasse
uma API para facilitar o processo de automatização.

> Com base nisso, temos alguns pré-requisitos para atender essa API.

A necessidade é desenvolver uma API RESTFul para o gerenciamento de pedidos de uma pastelaria utilizando Node.

### Documentação da API

> /api/pastel

| ROTA | METHOD | DESCRIPTION |
| ----------------------- | --------------- | -------------------------------------|
| /api/pastel | GET | listar todos os pastéis |
| /api/pastel | POST | criar um novo pastel |
| /api/pastel/pastelId | GET | visualizar um pastel a partir do ID |
| /api/pastel/pastelId | PUT | atualizar um pastel a partir do ID |
| /api/pastel/pastelId | DELETE | remover um pastel a partir do ID |


> /api/cliente

| ROTA | METHOD | DESCRIPTION |
| ------------------------ | --------------- | ------------------------------------- |
| /api/cliente | GET | listar todos os clientes |
| /api/cliente | POST | criar um novo cliente |
| /api/cliente/clienteId | GET | visualizar um cliente a partir do ID |
| /api/cliente/clienteId | PUT | atualizar um cliente a partir do ID |
| /api/cliente/clientelId | DELETE | remover um cliente a partir do ID |


## Instruções para entrega

* Versione com git e hospede seu código no github.
* Crie um README com instruções claras sobre como executar seu projeto.
* Submeta o link do seu repositório para o googleclass-room da atividade.


## Sobre o projeto

A API Restful deve contemplar os módulos **Cliente** e **Pastel**,
sendo que cada um deverá conter os endpoints de **CRUD**.

Sobre CRUD:
* Create: Criação de cliente e pastel.
* Read: Leitura de cliente e pastel.
* Update: Atualização de cliente e pastel.
* Delete: Remoção de cliente e pastel.


## Banco em memória

> No caso podemos adotar um banco em memória para salvar os dados com as seguintes informações:


* **Cliente**
- id
- nome
- email
- endereço
- Rua
- Nº
- bairro
- cidade
- estado
- cep

* **Pastel**
- id
- nome
- preço

## Requisitos

* O sistema deve conter uma série de tipos de pastéis já definidos.
* O pedido deve contemplar N pastéis.


## Critérios de avaliação

* Profundidade do conhecimento e utilização das funcionalidades do express e os conceitos de API visto nas aulas anteriores.
* Organização do código.
* Fidelidade aos requisitos solicitados.
* Consumo da API pelo PostMan
