# Todo List

## Como usar

Para usar o projeto, siga os passos abaixo:
- Crie uma cópia do banco de dados MySQL com o nome `TODOLIST` e rode o arquivo `todolist.sql` da pasta sql para criar as tabelas necessárias.
- No terminal na raiz do projeto, rode o comando `php -S localhost:8000` para iniciar o servidor.
- Acesse o endereço `http://localhost:8000` no seu navegador.

## Erros 
- caso o projeto não se conecte com o banco de dados, verifique se as credenciais de acesso ao banco de dados estão corretas no arquivo `connect.php` na pasta api.
- Se o problema continuar verifique se o arquivo de configuração do php `php.ini` está com a extensão `mysqli` habilitada.