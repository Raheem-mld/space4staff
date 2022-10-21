-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2022 at 01:36 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `space4staff`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `pass` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `firstname` varchar(50) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(50) COLLATE utf8_bin NOT NULL,
  `picture` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `pass`, `firstname`, `lastname`, `picture`) VALUES
(1, 'admin', 'admin', 'Ouali', 'Othman', 'http://localhost:3001/public/images/admin.jpg'),
(3, 'admin2', 'admin2', 'Salah', 'Maryem', 'http://localhost:3001/public/images/admin2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `details_seance`
--

CREATE TABLE `details_seance` (
  `id_details_seance` int(11) NOT NULL,
  `number_absence` int(11) DEFAULT NULL,
  `id_etudiant` int(11) DEFAULT NULL,
  `id_seance` int(11) DEFAULT NULL,
  `id_salle` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `firstname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `place_of_birth` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `nationality` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `picture` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `firstname`, `lastname`, `address`, `phone`, `email`, `gender`, `date_of_birth`, `place_of_birth`, `nationality`, `id_group`, `picture`) VALUES
(1, 'Ouali', 'Othman', 'test', '0645789878', 'othmanou01@gmail.com', 'Male', '2021-08-21', 'Oujda', 'Morroco', 1, 'http://localhost:3001/public/images/file-1640357673968.jpg'),
(2, 'Salah', 'Maryem', 'test', '0612457812', 'salahmaryem21@gmail.com', 'Male', '2021-08-21', 'Oujda', 'Morroco', 1, 'http://localhost:3001/public/images/file-1640357743713.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `id_exam` int(11) NOT NULL,
  `note` float DEFAULT NULL,
  `id_etudiant` int(11) DEFAULT NULL,
  `id_module` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `filiere`
--

CREATE TABLE `filiere` (
  `id_filiere` int(11) NOT NULL,
  `name_branch` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `formateur`
--

CREATE TABLE `formateur` (
  `id_formateur` int(11) NOT NULL,
  `firstname` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `picture` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `formateur`
--

INSERT INTO `formateur` (`id_formateur`, `firstname`, `lastname`, `address`, `phone`, `email`, `picture`) VALUES
(1, 'Annaki', 'Ihab', 'adress test', '0645124578', 'annakiihab@gmail.com', 'http://localhost:3001/public/images/prof1.jpg'),
(2, 'Belkacem', 'Ahmed', 'adress test', '0645124578', 'test@gmail.com', 'http://localhost:3001/public/images/prof2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` int(11) NOT NULL,
  `group_name` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `inscripton`
--

CREATE TABLE `inscripton` (
  `id_inscription` int(11) NOT NULL,
  `date_inscription` date DEFAULT NULL,
  `bourse` float DEFAULT NULL,
  `id_etudiant` int(11) DEFAULT NULL,
  `id_niveau_scolaire` int(11) DEFAULT NULL,
  `id_groupe` int(11) DEFAULT NULL,
  `id_filiere` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `inscripton`
--

INSERT INTO `inscripton` (`id_inscription`, `date_inscription`, `bourse`, `id_etudiant`, `id_niveau_scolaire`, `id_groupe`, `id_filiere`) VALUES
(1, '2021-12-24', 40, 1, 4, 1, 1),
(2, '2021-12-24', 40, 2, 4, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mode_paiment`
--

CREATE TABLE `mode_paiment` (
  `id_mode_paiment` int(11) NOT NULL,
  `mode_paiment` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id_module` int(11) NOT NULL,
  `coefficient` int(11) DEFAULT NULL,
  `id_formateur` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `niveau_scolaire`
--

CREATE TABLE `niveau_scolaire` (
  `id_niveau_scolaire` int(11) NOT NULL,
  `level_name` varchar(30) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `niveau_scolaire`
--

INSERT INTO `niveau_scolaire` (`id_niveau_scolaire`, `level_name`) VALUES
(1, '1St Year'),
(2, '2Nd Year'),
(3, '3Rd Year'),
(4, '4Th Year'),
(5, '5Th Year');

-- --------------------------------------------------------

--
-- Table structure for table `note_controle`
--

CREATE TABLE `note_controle` (
  `id_note_controle` int(11) NOT NULL,
  `date_controle` date DEFAULT NULL,
  `note` float DEFAULT NULL,
  `remark` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `id_etudiant` int(11) DEFAULT NULL,
  `id_module` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `paiment`
--

CREATE TABLE `paiment` (
  `id_paiment` int(11) NOT NULL,
  `date_paiment` date DEFAULT NULL,
  `montant` float DEFAULT NULL,
  `id_mode_paiment` int(11) DEFAULT NULL,
  `id_type_paiment` int(11) DEFAULT NULL,
  `id_inscription` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `salle`
--

CREATE TABLE `salle` (
  `id_salle` int(11) NOT NULL,
  `label_classroum` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

CREATE TABLE `seance` (
  `id_seance` int(11) NOT NULL,
  `id_etudiant` int(11) DEFAULT NULL,
  `id_module` int(11) DEFAULT NULL,
  `id_salle` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `type_paiment`
--

CREATE TABLE `type_paiment` (
  `id_type_paiment` int(11) NOT NULL,
  `type_paiment` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `details_seance`
--
ALTER TABLE `details_seance`
  ADD PRIMARY KEY (`id_details_seance`),
  ADD KEY `id_etudiant` (`id_etudiant`),
  ADD KEY `id_seance` (`id_seance`),
  ADD KEY `id_salle` (`id_salle`);

--
-- Indexes for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`),
  ADD KEY `id_group` (`id_group`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id_exam`),
  ADD KEY `id_etudiant` (`id_etudiant`),
  ADD KEY `id_module` (`id_module`);

--
-- Indexes for table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`id_filiere`);

--
-- Indexes for table `formateur`
--
ALTER TABLE `formateur`
  ADD PRIMARY KEY (`id_formateur`);

--
-- Indexes for table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id_groupe`);

--
-- Indexes for table `inscripton`
--
ALTER TABLE `inscripton`
  ADD PRIMARY KEY (`id_inscription`),
  ADD KEY `id_etudiant` (`id_etudiant`),
  ADD KEY `id_niveau_scolaire` (`id_niveau_scolaire`),
  ADD KEY `id_groupe` (`id_groupe`),
  ADD KEY `id_filiere` (`id_filiere`);

--
-- Indexes for table `mode_paiment`
--
ALTER TABLE `mode_paiment`
  ADD PRIMARY KEY (`id_mode_paiment`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id_module`),
  ADD KEY `id_formateur` (`id_formateur`);

--
-- Indexes for table `niveau_scolaire`
--
ALTER TABLE `niveau_scolaire`
  ADD PRIMARY KEY (`id_niveau_scolaire`);

--
-- Indexes for table `note_controle`
--
ALTER TABLE `note_controle`
  ADD PRIMARY KEY (`id_note_controle`),
  ADD KEY `id_etudiant` (`id_etudiant`),
  ADD KEY `id_module` (`id_module`);

--
-- Indexes for table `paiment`
--
ALTER TABLE `paiment`
  ADD PRIMARY KEY (`id_paiment`),
  ADD KEY `id_mode_paiment` (`id_mode_paiment`),
  ADD KEY `id_type_paiment` (`id_type_paiment`),
  ADD KEY `id_inscription` (`id_inscription`);

--
-- Indexes for table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`id_salle`);

--
-- Indexes for table `seance`
--
ALTER TABLE `seance`
  ADD PRIMARY KEY (`id_seance`),
  ADD KEY `id_etudiant` (`id_etudiant`),
  ADD KEY `id_module` (`id_module`),
  ADD KEY `id_salle` (`id_salle`);

--
-- Indexes for table `type_paiment`
--
ALTER TABLE `type_paiment`
  ADD PRIMARY KEY (`id_type_paiment`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `details_seance`
--
ALTER TABLE `details_seance`
  MODIFY `id_details_seance` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id_etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id_exam` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `id_filiere` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `formateur`
--
ALTER TABLE `formateur`
  MODIFY `id_formateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id_groupe` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inscripton`
--
ALTER TABLE `inscripton`
  MODIFY `id_inscription` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mode_paiment`
--
ALTER TABLE `mode_paiment`
  MODIFY `id_mode_paiment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id_module` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `niveau_scolaire`
--
ALTER TABLE `niveau_scolaire`
  MODIFY `id_niveau_scolaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `note_controle`
--
ALTER TABLE `note_controle`
  MODIFY `id_note_controle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paiment`
--
ALTER TABLE `paiment`
  MODIFY `id_paiment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salle`
--
ALTER TABLE `salle`
  MODIFY `id_salle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seance`
--
ALTER TABLE `seance`
  MODIFY `id_seance` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_paiment`
--
ALTER TABLE `type_paiment`
  MODIFY `id_type_paiment` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
