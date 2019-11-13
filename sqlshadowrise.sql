-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2019 at 06:22 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sqlshadowrise`
--

-- --------------------------------------------------------

--
-- Table structure for table `current points`
--

CREATE TABLE `current points` (
  `cop_score` int(100) NOT NULL,
  `criminal_score` int(100) NOT NULL,
  `user` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='keeps track of score with corisponding user user is same tab';

-- --------------------------------------------------------

--
-- Table structure for table `highscore`
--

CREATE TABLE `highscore` (
  `highscore` int(100) NOT NULL,
  `user` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='each highscore will be connect userid and be saved for later';

-- --------------------------------------------------------

--
-- Table structure for table `user_id`
--

CREATE TABLE `user_id` (
  `User ID` varchar(20) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=MRG_MyISAM DEFAULT CHARSET=utf8mb4 COMMENT='this is for saving each username with password';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `current points`
--
ALTER TABLE `current points`
  ADD UNIQUE KEY `user` (`user`);

--
-- Indexes for table `highscore`
--
ALTER TABLE `highscore`
  ADD UNIQUE KEY `user` (`user`);

--
-- Indexes for table `user_id`
--
ALTER TABLE `user_id`
  ADD UNIQUE KEY `User ID` (`User ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
