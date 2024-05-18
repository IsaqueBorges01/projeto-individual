create database ProjetoIndividual;
use ProjetoIndividual;

create table contato(
idContato int primary key auto_increment,
nome varchar(45),
email varchar(100),
assunto varchar(45),
mensagem varchar(100)
);

create table pontuacao(
idPontuacao int primary key auto_increment,
pontuacaoQuiz int,
dtQuiz date
);

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45),
fkPontuacao int,
constraint chkUsuario foreign key (fkPontuacao)
references pontuacao(idPontuacao)
);

create table pergunta(
idPergunta int primary key auto_increment,
perguntaQuiz varchar(45)
);

create table alternativa(
idAlternativa int primary key auto_increment,
alternativaQuiz varchar(100),
fkPergunta int
);



