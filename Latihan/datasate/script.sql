DROP TABLE IF EXISTS mahasiswa;
DROP TABLE IF EXISTS ref_angkatan;

CREATE TABLE ref_angkatan (
    tahun INT PRIMARY KEY,
    keterangan VARCHAR(50)
);

INSERT INTO ref_angkatan (tahun, keterangan) VALUES
(2012, 'Angkatan 2012'),
(2013, 'Angkatan 2013'),
(2017, 'Angkatan 2017'),
(2021, 'Angkatan 2021');

CREATE TABLE mahasiswa (
    NIM INT PRIMARY KEY,
    NAMA VARCHAR(100) NOT NULL,
    Jurusan VARCHAR(100) NOT NULL,
    Angkatan INT NOT NULL,
    Fakultas VARCHAR(100) NOT NULL,
    CONSTRAINT fk_angkatan
        FOREIGN KEY (Angkatan)
        REFERENCES ref_angkatan(tahun)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

INSERT INTO mahasiswa (NIM, NAMA, Jurusan, Angkatan, Fakultas) VALUES
(160121164, 'Frank',      'Seni',                2021, 'Seni'),
(300112165, 'John',       'Teknik Informatika',  2012, 'Teknik'),
(199113166, 'Sarah',      'Teknik Arsitektur',   2013, 'Teknik'),
(170117167, 'Bryan',      'Biologi',             2017, 'FMIPA');

SELECT * FROM mahasiswa;
SELECT * FROM ref_angkatan;
