Decisão da arquitetura utilizada: Clean architecture.

Lista de bibliotecas de terceiros utilizadas:
 - @faker-js/faker: ^8.4.1,
  - bcrypt: ^5.1.0,
  - class-validator: ^0.14.1,
  - cors: ^2.8.5,
  - dotenv: ^16.0.3,
  - express: ^4.18.2,
  - express-validator: ^7.0.1,
  - faker: ^6.6.6,
  - jsonwebtoken: ^9.0.2,
  - pg: ^8.4.0,
  - reflect-metadata: ^0.1.13,
  - ts-dotenv: ^0.8.3,
  - typeorm: ^0.3.20,
  - uuid: ^9.0.1

O que você melhoraria se tivesse mais tempo?
	- Faria um ACL;
	- Faria a documentação com o Swagger;
	- Busca por outros dados: Nome, RA, CPF, etc;
	- Trocaria a caixa de confirmação (confirm) por um modal do vuetify;
	- Permitiria que somente os usuários administrativos tivessem acesso as telas relacionadas aos alunos;

Quais requisitos obrigatórios que não foram entregues?
	- Acesso às telas de alunos SOMENTE por usuários administrativos, atualmente todos os perfis de usuários podem acessar o módulo de alunos.
