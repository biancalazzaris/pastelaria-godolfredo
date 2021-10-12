# Pastelaria Godolfredo
Projeto em Node.js, Express e Cors consumindo API 

Esse projeto é baseado em NODE.js, se você não tem ainda, você pode instalar com o seguinte comando:
```
npm install
```
Para verificar se você tem instalado, use o seguinte comando: 
```
node -v
```

Para rodar o projeto você vai precisar instalar alguns pacotes npm: Use o seguinte comando em seu terminal
```
npm i express body-parser cors
```
E para executar o projeto chame o nodemon:
```
npx nodemon
```
Exibirá a seguinte mensagem:
> app running in http://localhost:8000

### Documentação da API

Você pode clicar no endereço e começar a utilizar as rotas. 
Nesse projeto temos as seguintes rotas disponíveis:


> /api/pastel

| ROTA | METHOD | DESCRIPTION |
| ----------------------- | --------------- | -------------------------------------|
| /api/pastel | GET | listar todos os pastéis |
| /api/pastel | POST | criar um novo pastel |
| /api/pastel/id | GET | visualizar um pastel a partir do ID |
| /api/pastel/id | DELETE | remover um pastel a partir do ID |


> /api/cliente

| ROTA | METHOD | DESCRIPTION |
| ------------------------ | --------------- | ------------------------------------- |
| /api/cliente | GET | listar todos os clientes |
| /api/cliente | POST | criar um novo cliente |
| /api/cliente/id | GET | visualizar um cliente a partir do ID |
| /api/cliente/id | DELETE | remover um cliente a partir do ID |

