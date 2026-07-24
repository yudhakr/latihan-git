CREATE DATABASE IF NOT EXISTS db_movie;
USE db_movie;

CREATE TABLE IF NOT EXISTS tb_movie (
  id_tb_movie INT AUTO_INCREMENT PRIMARY KEY,
  title_tb_movie VARCHAR(255) NOT NULL,
  year_tb_movie INT NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_katagori (
  id_tb_katagori INT AUTO_INCREMENT PRIMARY KEY,
  nama_tb_katagori VARCHAR(255) NOT NULL,
  des_tb_katagori TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_user (
  email_tb_user VARCHAR(255) PRIMARY KEY,
  nama_tb_user VARCHAR(255) NOT NULL,
  pass_tb_user VARCHAR(255) NOT NULL
);

INSERT INTO tb_movie (title_tb_movie, year_tb_movie) VALUES
('The Matrix', 1999),
('Inception', 2010),
('Interstellar', 2014);

INSERT INTO tb_katagori (nama_tb_katagori, des_tb_katagori) VALUES
('Action', 'Film aksi dan petualangan'),
('Sci-Fi', 'Film fiksi ilmiah'),
('Drama', 'Film drama');
