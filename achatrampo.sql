-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.6.34 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para achatrampo
CREATE DATABASE IF NOT EXISTS `achatrampo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `achatrampo`;

-- Copiando estrutura para tabela achatrampo.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `dataNascimento` date NOT NULL,
  `endereco` varchar(250) NOT NULL,
  `numeroEndereco` varchar(100) NOT NULL,
  `bairroEndereco` varchar(80) NOT NULL,
  `complementoEndereco` varchar(80) DEFAULT NULL,
  `cepEndereco` varchar(30) NOT NULL,
  `cidadeEndereco` varchar(150) NOT NULL,
  `estadoEndereco` varchar(10) NOT NULL,
  `whatsapp` varchar(30) NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.cliente: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id`, `nome`, `dataNascimento`, `endereco`, `numeroEndereco`, `bairroEndereco`, `complementoEndereco`, `cepEndereco`, `cidadeEndereco`, `estadoEndereco`, `whatsapp`, `foto`) VALUES
	(54, 'Diego da Silva', '1992-03-18', 'Rua Presidente Abraão Lincoln', '546', 'Itaberaba', 'Casa', '16782387', 'Bauru', 'São Paulo', '1499887656', ''),
	(55, 'Diego da Silva', '1992-03-18', 'Rua Presidente Abraão Lincoln', '546', 'Itaberaba', 'Casa', '16782387', 'Bauru', 'São Paulo', '1499887656', ''),
	(56, 'Diego', '1992-03-18', 'Rua Presidente Abraão Lincoln', '546', 'Itaberaba', 'Casa', '16782387', 'Bauru', 'São Paulo', '1499887656', ''),
	(57, 'Rafael', '1992-06-18', 'Rua Presidente Abraão Lincoln', '4444', 'Centro', '', '16239909', 'Agudos', 'São Paulo', '14998743843', NULL);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.trabalhador
CREATE TABLE IF NOT EXISTS `trabalhador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCompleto` varchar(200) NOT NULL,
  `apelido` varchar(100) DEFAULT NULL,
  `dataNascimento` date NOT NULL,
  `cpf` varchar(16) NOT NULL,
  `atuacao` varchar(50) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `whatsapp` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.trabalhador: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` (`id`, `nomeCompleto`, `apelido`, `dataNascimento`, `cpf`, `atuacao`, `cidade`, `estado`, `whatsapp`) VALUES
	(166, 'Verona Toy', 'toyzinha', '1992-11-15', '37623434545', 'Manicure', 'Novo Horizonte', 'São Paulo', '17989329403'),
	(167, 'Devante Yost', '', '2019-09-11', '54354523221', 'Babá', 'Brejo Grande', 'Sergipe', '83849239202'),
	(168, 'Bennie Streich', '', '1996-04-30', '14353243231', 'Encanador', 'Bauru', 'São Paulo', '14983294278'),
	(169, 'Vinícius de Souza Marinelli', '', '2003-06-30', '78432748253', 'Eletricista', 'Bauru', 'São Paulo', '14997426821'),
	(170, 'Marco da Silva', 'Marquinho', '1998-07-19', '72637821312', 'Encanador', 'Agudos', 'São Paulo', '14998948983'),
	(171, 'Jão da Silva', 'Jão', '1992-07-28', '56792878832', 'Encanador', 'Agudos', 'São Paulo', '14998532566');
/*!40000 ALTER TABLE `trabalhador` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.trabalhospublicados
CREATE TABLE IF NOT EXISTS `trabalhospublicados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `prazo` varchar(50) DEFAULT 'Sem prazo',
  `atuacao` varchar(150) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idTrabalhador` int(11) DEFAULT NULL,
  `avaliacao` int(11) DEFAULT '0' COMMENT '1 = Péssimo; 2 = Muito Ruim; 3 = Regular; 4 = Bom; 5 = Muito Bom',
  `situacao` varchar(50) NOT NULL DEFAULT 'Pendente',
  `statu` varchar(50) NOT NULL DEFAULT 'A' COMMENT 'A = Ativo | I = Inativo (''excluido)',
  `dataHoraPublicacao` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_trabalhospublicados_cliente` (`idCliente`),
  KEY `FK_trabalhospublicados_trabalhador` (`idTrabalhador`),
  CONSTRAINT `FK_trabalhospublicados_cliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FK_trabalhospublicados_trabalhador` FOREIGN KEY (`idTrabalhador`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.trabalhospublicados: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `trabalhospublicados` DISABLE KEYS */;
INSERT INTO `trabalhospublicados` (`id`, `titulo`, `prazo`, `atuacao`, `descricao`, `idCliente`, `idTrabalhador`, `avaliacao`, `situacao`, `statu`, `dataHoraPublicacao`) VALUES
	(17, 'Fiação está com problema', '', 'Eletricista', 'Autem placeat voluptatem neque. Voluptas rem ea dolores tempora. Temporibus voluptatem in quis qui facilis doloremque.', 54, 167, 0, 'Pendente', 'A', '2020-07-19 21:46:46'),
	(18, 'Fiação está com problema', '', 'Eletricista', 'Iure sunt ratione quis nisi quisquam. Impedit debitis id id quae ut. Ex excepturi porro soluta.', 54, 167, 4, 'Pendente', 'I', '2020-07-19 22:24:13'),
	(19, 'Fiação está com problema', '', 'Eletricista', 'Totam dolorem ut iusto dolorum. Nobis qui quae eaque ex. Dicta mollitia dolor accusamus voluptatum qui in.', 54, NULL, 0, 'Pendente', 'A', '2020-07-19 22:43:15'),
	(20, 'Fiação está com problema', '', 'Eletricista', 'Magnam aliquid dolorum dolores consequatur et mollitia aut natus. Nesciunt praesentium repellendus sint molestiae repudiandae velit minima ullam inventore. Cumque similique nihil.', 55, 169, 4, 'Pendente', 'A', '2020-07-20 09:20:56'),
	(21, 'Fazer limpeza na minha casa', '', 'Diarista', 'Culpa voluptas facere sed est quia rerum omnis rerum. Et et et dolores sed officiis. Voluptate molestiae hic quod illum esse temporibus.', 56, NULL, 0, 'Pendente', 'A', '2020-07-20 09:58:16'),
	(22, 'Vazamento no banheiro', '', 'Encanador', 'Illum eos rerum eligendi. Ratione dolore repellendus illum qui nobis iusto. Iusto aliquam voluptas qui rerum voluptates ut aut.', 56, NULL, 0, 'Pendente', 'A', '2020-07-20 18:59:25'),
	(23, 'Fiação está com problema', '', 'Eletricista', 'Sapiente quia libero. Ea et aut enim. Cum alias sed.', 57, 169, 0, 'Pendente', 'A', '2020-07-22 19:40:06'),
	(24, 'Fazer limpeza na minha casa', '', 'Manicure', 'Molestiae cumque doloremque voluptas sit quia incidunt dolorem. Ex reprehenderit quo quod modi. Itaque est neque aliquam rerum.', 57, NULL, 0, 'Pendente', 'I', '2020-07-22 19:41:06');
/*!40000 ALTER TABLE `trabalhospublicados` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(300) NOT NULL,
  `senha` varchar(500) NOT NULL,
  `idTrabalhador` int(11) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_usuario_cliente` (`idCliente`),
  KEY `FK__trabalhador` (`idTrabalhador`) USING BTREE,
  CONSTRAINT `FK_usuario_cliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FK_usuario_trabalhador` FOREIGN KEY (`idTrabalhador`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.usuario: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`, `email`, `senha`, `idTrabalhador`, `idCliente`) VALUES
	(185, 'verona@gmail.com', 'c0c4404a96a90964d93ada8eb298bf0e', 166, NULL),
	(189, 'yost@gmail.com', '202cb962ac59075b964b07152d234b70', 167, NULL),
	(190, 'bennie@gmail.com', '5189b54e250528103ef9fa6d07278aae', 168, NULL),
	(191, 'viniciussouza_marinelli@outlook.com', 'c39d0e1f432c51ab7b6554ef93627ea9', 169, NULL),
	(193, 'marquinho@gmail.com', '9985039da9a041e4e95a6e62e63adf76', 170, NULL),
	(194, 'diego@gmail.com', 'b0ac23d94dcef21e36e457b4abf6e0cb', NULL, 56),
	(195, 'jaodasilva@gmail.com', 'eb4392eba29b33de167fc53275716da1', 171, NULL),
	(196, 'rafael@gmail.com', '496cfe52debb9a3c40847aaf72b7e179', NULL, 57);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
