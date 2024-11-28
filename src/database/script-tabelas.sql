-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
DROP DATABASE aquatech;

CREATE DATABASE aquatech;

USE aquatech;


CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


SELECT * FROM usuario;

CREATE TABLE quiz (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    qtd_acertos INT,
    qtd_erros INT,
    dt_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);


select * from usuario;

INSERT INTO quiz (fk_usuario, qtd_acertos, qtd_erros) VALUES (2, 6, 2);

SELECT COUNT(fk_usuario) FROM quiz WHERE fk_usuario = 1;

select * from quiz;

SELECT SUM(qtd_acertos) as 'QuantidadeDeAcertos', SUM(qtd_erros) as 'QuantidaDeErros'FROM quiz 
	WHERE fk_usuario = 4;

SELECT SUM(qtd_erros) as 'QuantidaDeErros' FROM quiz
	WHERE fk_usuario = 3;
    
SELECT qtd_acertos, dt_hora FROM quiz
	WHERE fk_usuario = 3
		ORDER BY dt_hora;


	

SELECT pontuacao FROM quiz 
	WHERE fk_usuario = 3
		ORDER BY id_quiz DESC
        LIMIT 1;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);