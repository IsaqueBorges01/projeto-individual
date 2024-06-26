create database ProjetoIndividual;
use ProjetoIndividual;

create table contato(
idContato int primary key auto_increment,
nome varchar(45),
email varchar(100),
assunto varchar(45),
mensagem varchar(100)
);

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45)
);

CREATE TABLE pontuacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    totalQuestions INT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkUsuario int,
	  constraint chkUsuarioPontuacao foreign key (fkUsuario)
	  references usuario(id)
);

create table pergunta(
idPergunta int primary key auto_increment,
perguntaQuiz varchar(100)
);

create table alternativa(
idAlternativa int primary key auto_increment,
alternativaQuiz varchar(45),
fkPergunta int,
constraint chkPerguntaAlternativa foreign key (fkPergunta) 
references pergunta(idPergunta)
);

select * from contato;
select * from usuario;
select * from pontuacao;
SELECT COUNT(DISTINCT fkUsuario) as totalJogadores FROM pontuacao;

insert into pergunta values
(default, "A proteína é importante para a recuperação muscular após o exercício?"),
(default, "Correr na esteira queima mais calorias do que correr ao ar livre?"),
(default, "Fazer abdominais todos os dias é uma boa maneira de perder gordura abdominal?"),
(default, "É necessário descansar entre os treinos para que os músculos se recuperem?"),
(default, "Beber água durante o treino pode ajudar a prevenir a desidratação?"),
(default, "O agachamento é um exercício que trabalha principalmente os músculos das costas?"),
(default, "O número de repetições é mais importante do que a técnica ao levantar pesos?"),
(default, "Exercícios de flexibilidade devem ser feitos apenas no final do treino?"),
(default, "O consumo adequado de água é crucial para o desempenho durante o exercício?"),
(default, "A dor muscular após o exercício significa que você teve um bom treino?");


  insert into alternativa values
        (default, 'true',1),
        (default, 'true',2),
        (default, 'false',3),
        (default, 'true',4),
        (default, 'true',5),
        (default, 'false',6),
        (default, 'false',7),
        (default, 'false',8),
        (default, 'true',9),
        (default, 'false',10);

      select alternativaQuiz, perguntaQuiz from alternativa join pergunta on fkPergunta = idPergunta;

      SELECT usuario.id, usuario.nome, MAX(pontuacao.score) as max_score
      FROM pontuacao JOIN usuario ON pontuacao.fkUsuario = usuario.id
     GROUP BY usuario.id, usuario.nome ORDER BY max_score DESC LIMIT 5;

    SELECT usuario.*, p.*
    FROM usuario JOIN (
    SELECT fkUsuario, MAX(score) AS max_score
    FROM pontuacao as p
    GROUP BY fkUsuario ) 
    pm ON usuario.id = pm.fkUsuario
    JOIN pontuacao p ON p.fkUsuario = pm.fkUsuario AND p.score = pm.max_score
    WHERE p.id IN (
    SELECT MIN(pontuacao2.id)
    FROM pontuacao as pontuacao2 JOIN (
    SELECT fkUsuario, MAX(score) AS max_score
    FROM pontuacao as pontuacao3 GROUP BY fkUsuario
    ) pontuacao3 ON pontuacao2.fkUsuario = pontuacao3.fkUsuario AND pontuacao2.score = pontuacao3.max_score
    GROUP BY pontuacao2.fkUsuario
    ) ORDER BY pm.max_score DESC LIMIT 5;


        

