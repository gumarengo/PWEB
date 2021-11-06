1)
-- Nosso aplicativo faz o controle e acompanhamendo do consumo de agua do usuario, ondele e faz as leituras do hidrometro dia a dia , no final do mes
-- o aplicativo faz o fechamento e projeção do valor final da conta de agua, e caso o consumo esteja maior que o normal ele exibe um alerta 
-- informando um possivel vazamento de agua.
2 - a) 
---DER FEITO




2 - b)
create table usuarios (
    user_id number(8,0) GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    nome varchar2(255) not null,
    email varchar2(255) not null,
    endereco_id number(8,0) not null,
    hashSenha varchar2(255) not null,
    objetivoGasto number(8,3),
    constraint pk_userIdUser Primary Key (user_id)
)


create table endereco (
    endereco_id number(8,0) GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    logradouro varchar2(255) not null,
    bairro varchar2(255) not null,
    cidade varchar2(255) not null,
    estado char(2) not null,
    pais varchar2(55) not null,
    constraint pk_enderecoId Primary Key (endereco_id)
)

create table agua_conta (
    conta_id number(8,0) GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    user_id number(8,0) not null,
    tarifa number(8,3) not null,
    consumo number(8,3) not null,
    dataAbertura date not null,
    valor number(8,2) not null,
    constraint pk_contaId Primary Key (conta_id)
)


create table agua_leitura(
    leitura_id number(8,0) GENERATED ALWAYS as IDENTITY(START with 1 INCREMENT by 1),
    conta_id number(8,0) not null,
    metodoLeitura char(2) not null,
    valorEntrada number(10,0) not null
)


Alter table agua_conta 
ADD (constraint pk_contaIdUser Foreign Key (user_id) 
     references usuarios (user_id) on delete cascade);



Alter table usuarios 
ADD (constraint pk_enderecoIdUser Foreign Key (endereco_id) 
     references endereco (endereco_id) on delete cascade);



Alter table agua_leitura 
ADD (constraint pk_contaIdLeitura Foreign Key (conta_id) 
     references agua_conta (conta_id) on delete cascade);
     
     
     
2 - c)    
insert into endereco (logradouro,bairro,cidade,estado,pais) values ('Maria Zarzur Esser, n36', 'Santa Luiza', 'Sorocaba', 'SP','Brasil');
insert into usuarios (nome,email,endereco_id,hashSenha,objetivoGasto) values ('Fernando Bonfim', 'fernandobonfimandrade@gmail.com', 2, '654as65d4a564d6a5s4d6asd6as4d65s4d', 3000.00);
insert into endereco (logradouro,bairro,cidade,estado,pais) values ('Rua Osvaldo Silva Araujo', 'Centro', 'Inhapim', 'MG','Brasil');
insert into usuarios (nome,email,endereco_id,hashSenha,objetivoGasto) values ('Fernando Andrade', 'fernando_andrade@gmail.com', 2, '65r5r4t4r54rt54rt4r5t4r5t4', 2000.00);

insert into agua_conta (user_id,tarifa,consumo,dataAbertura,valor ) values (1, 0.25, 2000, DATE '2020-12-21', 100.00);
insert into agua_leitura (conta_id,metodoLeitura,valorEntrada ) values (5, 'MA', 1858565663);
insert into agua_leitura (conta_id,metodoLeitura,valorEntrada ) values (5, 'CA', 1858565993);


2 - d) 
create index idx_enderecoIdUser on usuarios(user_id,endereco_id);
create index idx_aguaContaIdUser on agua_conta(user_id,conta_id);
create index idx_aguaLeituraIdconta on agua_leitura(leitura_id,conta_id);
create index idx_enderecoEstado on endereco(estado,cidade);

3)
3 - a)
-- Selecionar os dados do usuario e seu endereço
SELECT usuarios.nome,usuarios.email,endereco.logradouro,endereco.bairro,endereco.cidade,endereco.estado,endereco.pais 
FROM usuarios
INNER JOIN endereco ON endereco.endereco_id = usuarios.endereco_id;


3 - b)
-- calcular a media dos gastos de um ano
SELECT AVG(valor) as media
FROM agua_conta
where dataAbertura between DATE '2020-01-01' and DATE '2021-01-01';


3 - c)
CREATE VIEW contaLeiturasTotal
as SELECT agua_conta.conta_id, agua_conta.dataAbertura,agua_conta.valor, COUNT(agua_leitura.leitura_id) as qtdLeituras
FROM agua_conta
LEFT JOIN agua_leitura on agua_leitura.conta_id = agua_conta.conta_id
GROUP BY  agua_conta.conta_id, agua_conta.dataAbertura,agua_conta.valor;


3 - d)
-- Listar quantidade de leituras de hidrometro das contas.
SELECT agua_conta.conta_id, agua_conta.dataAbertura, COUNT(agua_leitura.leitura_id) as qtdLeituras
FROM agua_conta
LEFT JOIN agua_leitura on agua_leitura.conta_id = agua_conta.conta_id
GROUP BY  agua_conta.conta_id, agua_conta.dataAbertura;



3 - e)
-- Listar usuarios do estado de SP union usuarios do estado de MG
SELECT usuarios.nome,usuarios.email,endereco.logradouro,endereco.bairro,endereco.cidade,endereco.estado,endereco.pais 
FROM usuarios
INNER JOIN endereco ON endereco.endereco_id = usuarios.endereco_id
WHERE endereco.estado = 'SP'

UNION 

SELECT usuarios.nome,usuarios.email,endereco.logradouro,endereco.bairro,endereco.cidade,endereco.estado,endereco.pais 
FROM usuarios
INNER JOIN endereco ON endereco.endereco_id = usuarios.endereco_id
WHERE endereco.estado = 'MG';


3 - f)
-- retorna user_id de quem nao tem conta
SELECT user_id FROM usuarios
MINUS 
SELECT user_id FROM agua_conta;


3 - g)
--retorna o user_id que esta na tabela agua_conta
SELECT user_id FROM usuarios
INTERSECT 
SELECT user_id FROM agua_conta


4)
4 - a)
--busca os dados do usuario id 1, e mostra as contas que estao abaixo do objetivoGasto
SELECT * FROM agua_conta
WHERE valor < (SELECT objetivoGasto FROM usuarios where user_id = 1);

4 - b)
--retorna os dados do usuario que ja tenha conta cadastrada
SELECT * FROM usuarios
WHERE user_id IN ( SELECT user_id FROM agua_conta);

4 - c)
--retorna os dados das contas que ainda nao foram lidas
SELECT * FROM agua_conta
WHERE conta_id NOT IN ( SELECT conta_id FROM agua_leitura);

4 - d)
--retorna a conta que já existe leitura
SELECT * FROM agua_conta
WHERE EXISTS ( SELECT conta_id FROM agua_leitura);

4 - e)
--atualiza a cidade para Aracoiaba da Serra para usuario de id = 1
UPDATE endereco
SET cidade = 'Aracoiaba da Serra'
WHERE endereco_id = (SELECT endereco_id FROM usuarios WHERE user_id = 1);

4 - f)
--remove a leitura da conta
DELETE agua_leitura
WHERE EXISTS ( SELECT conta_id FROM agua_conta);